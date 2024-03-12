import {Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild, HostListener} from '@angular/core';
import { Photograph } from "../models/photograph.model";
import { PhotographService } from "../services/photograph.service";
import * as AOS from 'aos';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from "rxjs";

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss']
})
export class AllPhotosComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modal', { static: false }) modalElementRef!: ElementRef;
  photographs!: Photograph[];
  selectedPhoto: Photograph | null = null;
  isVertical: boolean = false;
  isLoading: boolean = true;
  locations: string[] = [];
  selectedLocation: string = '';
  isSelectOpen = false;
  isFullScreen = false;
  scale: number = 1;
  showCopiedMessage: boolean = false;

  constructor(
    private photographService: PhotographService,
    private router: Router
  ) {
    // Подписываемся на события роутера
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Реинициализируем AOS при каждой смене маршрута
        AOS.init();
      }
    });
    this.router.events.pipe(
      // Фильтруем, чтобы реагировать только на события завершения навигации
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Прокручиваем страницу вверх
      window.scrollTo(0, 0);
    });

  }

  ngOnInit() {

    this.photographs = this.photographService.getPhotographs().reverse();
    this.locations = ['All Locations', ...this.photographService.getUniqueLocations()];
    AOS.init();
    this.isLoading = false;

    document.addEventListener('click', this.closeFilterOnOutsideClick.bind(this), true);
  }
  ngOnDestroy() {
  document.removeEventListener('click', this.closeFilterOnOutsideClick.bind(this), true);
}
ngAfterViewInit() {
  document.addEventListener('click', this.closeFilterOnOutsideClick.bind(this), true);
}

 closeFilterOnOutsideClick(event: MouseEvent) {
  if (this.filterElementRef && !this.filterElementRef.nativeElement.contains(event.target)) {
    this.isSelectOpen = false;
  }
}
@ViewChild('filter', { static: false  }) filterElementRef!: ElementRef;
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
toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  selectLocation(location: string) {
    this.selectedLocation = location === 'All Locations' ? '' : location;
    this.filterPhotographs();
    this.isSelectOpen = false;
    this.toggleSelect();

  }
filterPhotographs() {
  this.photographs = this.selectedLocation
    ? this.photographService.getPhotographs().filter(photo => photo.location === this.selectedLocation)
    : this.photographService.getPhotographs().reverse();

}
showPrevPhoto() {
    const currentIndex = this.photographs.findIndex(photo => photo === this.selectedPhoto);
    if (currentIndex > 0) {
      this.selectedPhoto = this.photographs[currentIndex - 1];
    } else {
      this.selectedPhoto = this.photographs[this.photographs.length - 1]; // Переход к последнему, если текущий - первый
    }
  }

showNextPhoto() {
  const currentIndex = this.photographs.findIndex(photo => photo === this.selectedPhoto);
  if (currentIndex < this.photographs.length - 1) {
    this.selectedPhoto = this.photographs[currentIndex + 1];
  } else {
    this.selectedPhoto = this.photographs[0]; // Переход к первому, если текущий - последний
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
  isShareModalOpen: boolean = false;
  toggleShareModal(): void {
    this.isShareModalOpen = !this.isShareModalOpen;
  }

  copyPhoneNumber(phoneNumber: string) {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      this.showCopiedMessage = true;
      setTimeout(() => {
        const messageElement = document.querySelector('.copied-message');
        if (messageElement) {
          messageElement.classList.add('show');
          setTimeout(() => {
            if (messageElement.classList.contains('show')) {
              messageElement.classList.replace('show', 'hide');
            }
            setTimeout(() => {
              if (messageElement.classList.contains('hide')) {
                this.showCopiedMessage = false;
                messageElement.classList.remove('hide');
              }
            }, 500); // Длительность анимации fadeOut
          }, 2000); // Время отображения сообщения
        }
      }, 0);
    });
  }


}
