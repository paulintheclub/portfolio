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
    document.querySelector('app-preview')?.scrollIntoView({ behavior: 'smooth' });
  }
}
