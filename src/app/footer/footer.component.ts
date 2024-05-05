import { Component } from '@angular/core';
import { ProductStore } from '../store/product.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1 class="footer">Total Amount of Pruducts: {{productStore.totalProducts}}</h1>
    </div>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(public productStore: ProductStore) {}
}
