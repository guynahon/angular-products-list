import { Component, inject } from '@angular/core';
import { ProductStore } from '../store/product.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <h1 class="footer">Total Price: {{productStore.totalPrice()}}$</h1>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public productStore: ProductStore) {
    console.log('FooterComponent instance: ', productStore);
  }
  // productStore: ProductStore = inject(ProductStore);
}
