import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Photograph} from "../../models/photograph.model";
import { PhotographService} from "../../services/photograph.service";
import * as AOS from 'aos';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  photographs!: Photograph[];
  isTwoColumnLayout: boolean = true;
  showFullDescription: { [key: number]: boolean } = {}; // Используйте объект для отслеживания состояния для каждой фотографии
  @ViewChild('modal', { static: false }) modalElementRef!: ElementRef;
  selectedPhoto: Photograph | null = null;
  isVertical: boolean = false;
  isFullScreen = false;
  scale: number = 1;

  constructor(private photographService: PhotographService) {}

  ngOnInit() {
    const allPhotographs = this.photographService.getPhotographs();
    const start = allPhotographs.length - 6;
    this.photographs = allPhotographs.slice(start).reverse();

    AOS.init();
  }

  setTwoColumnLayout(): void {
    if (!this.isTwoColumnLayout) {
      this.isTwoColumnLayout = true;
    }
  }

  setThreeColumnLayout(): void {
    if (this.isTwoColumnLayout) {
      this.isTwoColumnLayout = false;
    }
  }
async savePhoto(url: string, name: string, photo: Photograph): Promise<void> {
  try {
    // Загружаем изображение как Blob
    const response = await fetch(url);
    const blob = await response.blob();

    // Создаем URL для Blob
    const blobUrl = URL.createObjectURL(blob);

    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = name; // Указываем имя файла для скачивания
    document.body.appendChild(link); // Добавляем ссылку в документ
    link.click(); // Имитируем клик по ссылке, чтобы начать скачивание

    // Очистка после скачивания
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl); // Освобождаем URL Blob
    photo.isSaved = true;
  } catch (error) {
    console.error('Ошибка при скачивании изображения:', error);
  }
}

updatePhotosState(): void {
  this.photographs = [...this.photographs];
}

  openModal(photo: Photograph) {
    this.selectedPhoto = photo;
    setTimeout(() => {
      this.modalElementRef.nativeElement.addEventListener('click', this.handleClickOutside.bind(this), true);
    });
  }

  closeModal() {
    this.selectedPhoto = null;
    this.modalElementRef.nativeElement.removeEventListener('click', this.handleClickOutside.bind(this), true);

  }
    handleClickOutside(event: Event) {
    if (!this.modalElementRef.nativeElement.contains(event.target)) {
      // Этот код не будет вызван, так как событие происходит внутри .modal
      return;
    }
    // Проверяем, был ли клик совершен за пределами .modal-content
    const modalContent = this.modalElementRef.nativeElement.querySelector('.modal-content');
    const controlContent = this.modalElementRef.nativeElement.querySelector('.control-buttons');
    if (!modalContent.contains(event.target)) {
      if(!controlContent.contains(event.target)){
        this.closeModal();
      }
    }
  }
  onImageLoad(event: any): void {
    const height = event.target.naturalHeight;
    const width = event.target.naturalWidth;
    this.isVertical = height > width; // Определение, является ли изображение вертикальным
  }
closeModalWithAnimation() {
  const modal = document.querySelector('.modal');
  if (modal !== null) {
    modal.classList.add('fadeOut');
    setTimeout(() => this.closeModal(), 500); // Задержка должна совпадать с продолжительностью анимации
  }
}
showPrevPhoto() {
    const currentIndex = this.photographs.findIndex(photo => photo === this.selectedPhoto);
    const prev = this.modalElementRef.nativeElement.querySelector('.prev');
    const next = this.modalElementRef.nativeElement.querySelector('.next');
    if (currentIndex > 0) {
      this.selectedPhoto = this.photographs[currentIndex - 1];
      prev.style.display = 'flex'
      next.style.display = 'flex'
    }
    else {
      prev.style.display = 'none'
  }
    // else {
    //   this.selectedPhoto = this.photographs[this.photographs.length - 1]; // Переход к последнему, если текущий - первый
    // }
  }

showNextPhoto() {
  const currentIndex = this.photographs.findIndex(photo => photo === this.selectedPhoto);
  const prev = this.modalElementRef.nativeElement.querySelector('.prev');
  const modal_content = this.modalElementRef.nativeElement.querySelector('.modal-content');
  const go_to_all_photos = this.modalElementRef.nativeElement.querySelector('.go-to-all-photos');
  if (currentIndex < this.photographs.length - 1) {
    this.selectedPhoto = this.photographs[currentIndex + 1];
    prev.style.display = 'flex'
  } else {
    modal_content.style.display = 'none'
    go_to_all_photos.style.display = 'flex'

  }
}
  // Метод для увеличения изображения
  increaseSize() {
    this.scale *= 1.1; // Увеличиваем масштаб на 10%
    this.applyScale();
  }

  // Метод для уменьшения изображения
  decreaseSize() {
    this.scale /= 1.1; // Уменьшаем масштаб на 10%
    this.applyScale();
  }

  // Применяем масштаб к элементу изображения
  applyScale() {
    const modalImg = this.modalElementRef.nativeElement.querySelector('.modal-img');
    if (modalImg) {
      modalImg.style.transform = `scale(${this.scale})`;
    }
  }

    // Переключение между полноэкранным и обычным режимами
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    if (!this.isFullScreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.log(err));
        }
    } else {
        const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
            mozRequestFullScreen?: () => Promise<void>;
            webkitRequestFullscreen?: () => Promise<void>;
            msRequestFullscreen?: () => Promise<void>;
        };

        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    }
  }





}
