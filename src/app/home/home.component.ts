import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <header>
    <a href="/">home</a>
    <br>
    <a href="/main">main</a>
      <h1 class="header">Welcome to Products List !</h1>
    </header>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
