import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AddRemoveButtonComponent } from '../add-remove-button/add-remove-button.component';
import { ProductStore } from '../store/product.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, AddRemoveButtonComponent],
  template: `
    <ul>
      <li class="single-product" *ngFor="let p of productStore.products; index as i;">
        <div class="product-info">
          <span class="product-name">{{ p.name }}</span>
          <div class="two-buttons">
            <app-add-remove-button [sign]="'+'" [func]="productStore.addOne.bind(productStore)" [index]="i"></app-add-remove-button>
            <app-add-remove-button [sign]="'-'" [func]="productStore.removeOne.bind(productStore)" [index]="i"></app-add-remove-button>
          </div>
          <div class="product-quantity">{{p.total}}</div>
        </div>
      </li>
    </ul>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public productStore: ProductStore) {}
}
