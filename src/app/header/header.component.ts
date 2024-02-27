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
  }

}
