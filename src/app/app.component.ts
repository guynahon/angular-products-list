import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProductsComponent, FooterComponent],
  template: `
    <app-home></app-home>
    <router-outlet />
    <app-footer></app-footer>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
