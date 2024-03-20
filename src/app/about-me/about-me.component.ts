import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(
    private router: Router
  ) {
        this.router.events.pipe(
      // Фильтруем, чтобы реагировать только на события завершения навигации
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Прокручиваем страницу вверх
      window.scrollTo(0, 0);
    });
  }

}
