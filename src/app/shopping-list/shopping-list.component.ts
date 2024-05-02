import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    <app-products></app-products>
  `,
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

}
