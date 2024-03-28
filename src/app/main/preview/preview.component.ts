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
  showFullDescription: { [key: number]: boolean } = {};
  @ViewChild('modal', { static: false }) modalElementRef!: ElementRef;
  selectedPhoto: Photograph | null = null;
  isVertical: boolean = false;
  isFullScreen = false;
  scale: string = '';
  scaleSize: boolean = true;

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

    const response = await fetch(url);
    const blob = await response.blob();


    const blobUrl = URL.createObjectURL(blob);


    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = name;
    document.body.appendChild(link);
    link.click();

    // Очистка после скачивания
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
    photo.isSaved = true;
  } catch (error) {
    console.error('Error until downloading:', error);
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
      document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedPhoto = null;
    this.modalElementRef.nativeElement.removeEventListener('click', this.handleClickOutside.bind(this), true);

  }
    handleClickOutside(event: Event) {
    if (!this.modalElementRef.nativeElement.contains(event.target)) {

      return;
    }

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
    this.isVertical = height > width;
  }

closeModalWithAnimation() {
  const modal = document.querySelector('.modal');
  if (modal !== null) {
    modal.classList.add('fadeOut');
    setTimeout(() => this.closeModal(), 500);
  }
  this.enableScroll()
}
  enableScroll()  {
    document.body.style.overflow = '';
}



showPrevPhoto() {
    if(!this.scaleSize){
      this.decreaseSize()
    }
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

  }

showNextPhoto() {
    if(!this.scaleSize){
      this.decreaseSize()
    }
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

  increaseSize() {
    const modal_content = this.modalElementRef.nativeElement.querySelector('.modal-content');
    modal_content.style.maxWidth= '1300px'
    this.scaleSize = false
    this.scale ='120';
    this.applyScale();
  }


  decreaseSize() {
    const modal_content = this.modalElementRef.nativeElement.querySelector('.modal-content');
    modal_content.style.maxWidth= '1000px'
    this.scaleSize = true
    this.scale ='90';
    this.applyScale();
  }


  applyScale() {
    const modalImg = this.modalElementRef.nativeElement.querySelector('.modal-img');
    if (modalImg) {
      modalImg.style.maxWidth = this.scale+'%';
      modalImg.style.maxHeight = this.scale+'vh';
}

    }

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
        } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) {
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    }
  }





}
