import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
    <nav>
      <a routerLink="/main">main</a>
      <br>
      <a routerLink="/">home</a>
    </nav>

      <h1 class="header">Welcome to Products List !</h1>
    </header>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
