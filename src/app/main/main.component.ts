import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
isProfileVisible: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 100) {
      this.isProfileVisible = false;
    } else {
      this.isProfileVisible = true;
    }
  }
}
