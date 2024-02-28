import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio'
  isShareModalOpen: boolean = false;
  toggleShareModal(): void {
    this.isShareModalOpen = !this.isShareModalOpen;
  }



  copyLink({inputElement}: { inputElement: any }): void {
    inputElement.select();
    document.execCommand('copy');
    // Показать уведомление об успешном копировании
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




}
