import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeaderHeroComponent } from '../header-hero/header-hero.component';
import { RoutesObj } from '../types/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderHeroComponent],
  template: `
    <header>
      <nav>
        <a routerLink="/">Home</a>
        <br>
        <a routerLink="/main">Main</a>      
      </nav>
      <app-header-hero [text]="getUrl()"></app-header-hero>
    </header>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  getUrl() {
    const url = this.router.url;
    const index: number = url.lastIndexOf("/")+1
    const value: string = url.slice(index);
    const routesObj: RoutesObj = {
      "": "Home",
      "main": "Main"
    };
    if(value in routesObj) {
      return routesObj[value];
    }
    return "NOT FOUND";
  }
  
}
