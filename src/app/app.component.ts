import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProductsComponent],
  template: `
    <app-home></app-home>
    <app-products></app-products>
    <router-outlet />
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
