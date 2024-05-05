import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-hero',
  standalone: true,
  imports: [],
  template: `
    <h1 class="header">Welcome to {{text}}!</h1>`,
  styleUrl: './header-hero.component.css'
})
export class HeaderHeroComponent {
  @Input() text: String = "";
}
