import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <ul ng-repeat="p in products">
      <li>{{p}}</li>
    </ul>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = ['tomato', 'cucumber', 'onion', 'apple', 'banana'];
}
