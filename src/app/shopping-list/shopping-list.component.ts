import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ProductsComponent, TotalComponent],
  template: `
    <div class="shopping-list">
      <app-products class="products-cont"></app-products>
      <app-total class="total-cont"></app-total>
    </div>
      `,
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

}
