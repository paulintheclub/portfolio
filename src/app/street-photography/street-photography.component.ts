import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Photograph} from "../models/photograph.model";
import {PhotographService} from "../services/photograph.service";
import {NavigationEnd, Router} from "@angular/router";
import * as AOS from "aos";
import {filter} from "rxjs";

@Component({
  selector: 'app-street-photography',
  templateUrl: './street-photography.component.html',
  styleUrls: ['./street-photography.component.scss']
})
export class StreetPhotographyComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modal', { static: false }) modalElementRef!: ElementRef;
  photographs!: Photograph[];
  selectedPhoto: Photograph | null = null;
  isVertical: boolean = false;
  isLoading: boolean = true;
  locations: string[] = [];
  selectedLocation: string = '';
  isSelectOpen = false;
  isFullScreen = false;
  scale: string = '';
  scaleSize: boolean = true;
  showCopiedMessage: boolean = false;
  constructor(
    private photographService: PhotographService,
    private router: Router
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        AOS.init();
      }
    });
    this.router.events.pipe(

      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Прокручиваем страницу вверх
      window.scrollTo(0, 0);
    });

  }

  ngOnInit() {
    document.body.style.overflow = '';
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
  document.body.style.overflow = '';
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
    if(!this.scaleSize){
      this.decreaseSize()
    }
    const currentIndex = this.photographs.findIndex(photo => photo === this.selectedPhoto);
    if (currentIndex > 0) {
      this.selectedPhoto = this.photographs[currentIndex - 1];
    } else {
      this.selectedPhoto = this.photographs[this.photographs.length - 1];
    }
  }

showNextPhoto() {
    if(!this.scaleSize){
      this.decreaseSize()
    }
  const currentIndex = this.photographs.findIndex(photo => photo === this.selectedPhoto);
  if (currentIndex < this.photographs.length - 1) {
    this.selectedPhoto = this.photographs[currentIndex + 1];
  } else {
    this.selectedPhoto = this.photographs[0];
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
            }, 500);
          }, 2000);
        }
      }, 0);
    });
  }


}
