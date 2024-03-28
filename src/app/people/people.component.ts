import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PhotographService} from "../services/photograph.service";
import {NavigationEnd, Router} from "@angular/router";
import * as AOS from "aos";
import {filter} from "rxjs";
import {PeopleModel} from "../models/people.model";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild('modal', { static: false }) modalElementRef!: ElementRef;
  photographsOfPeople!: PeopleModel[];
  selectedPhoto: PeopleModel | null = null;
  isVertical: boolean = false;
  isLoading: boolean = true;
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

      window.scrollTo(0, 0);
    });

  }

  ngOnInit() {
    document.body.style.overflow = '';
    this.photographsOfPeople = this.photographService.getPhotographsOfPeople().reverse();
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
  openModal(photo: PeopleModel) {
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

showPrevPhoto() {
    if(!this.scaleSize){
      this.decreaseSize()
    }
    const currentIndex = this.photographsOfPeople.findIndex(photo => photo === this.selectedPhoto);
    if (currentIndex > 0) {
      this.selectedPhoto = this.photographsOfPeople[currentIndex - 1];
    } else {
      this.selectedPhoto = this.photographsOfPeople[this.photographsOfPeople.length - 1];
    }
  }

showNextPhoto() {
    if(!this.scaleSize){
      this.decreaseSize()
    }
  const currentIndex = this.photographsOfPeople.findIndex(photo => photo === this.selectedPhoto);
  if (currentIndex < this.photographsOfPeople.length - 1) {
    this.selectedPhoto = this.photographsOfPeople[currentIndex + 1];
  } else {
    this.selectedPhoto = this.photographsOfPeople[0];
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
