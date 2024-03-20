import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
   showDropdown = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen && window.innerWidth < 768) {
      // Блокировать прокрутку
      document.body.style.overflow = 'hidden';
    } else {
      // Разблокировать прокрутку
      document.body.style.overflow = '';
    }
  }


}
