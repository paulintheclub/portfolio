import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio'
  isShareModalOpen: boolean = false;
  showCopiedMessage: boolean = false;
  toggleShareModal(): void {
    this.isShareModalOpen = !this.isShareModalOpen;
  }



  copyLink({inputElement}: { inputElement: any }): void {
    inputElement.select();
    document.execCommand('copy');
  }
  ngOnInit(): void {
  window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top-btn') as HTMLElement;
    if (window.scrollY > 100) {
      scrollTopBtn.style.display = 'flex';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

}
scrollToTop(): void {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
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
