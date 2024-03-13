import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    leaveProfile: boolean = false;
    enterProfile: boolean = false;
  ngOnInit() {
        AOS.init();

  }
scrollToPreview() {
  const previewElement = document.querySelector('app-preview');
  if (previewElement) {
    const yOffset = -80; // Здесь задайте отрицательное значение высоты вашей навигационной панели.
    const y = previewElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
}

}
