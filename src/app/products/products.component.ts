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
            <app-add-remove-button [sign]="'+'" [func]="onAdd.bind(this)" [index]="i"></app-add-remove-button>
            <app-add-remove-button [sign]="'-'" [func]="onRemove.bind(this)" [index]="i"></app-add-remove-button>
          </div>
          <div class="product-quantity">{{p.total}}</div>
          <div class="product-total-price">{{p.productTotalPrice}}$</div>
        </div>
      </li>
    </ul>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public productStore: ProductStore) {}

  onAdd(index: number) {
    this.productStore.addOne(index);
  }

  onRemove(index: number) {
    this.productStore.removeOne(index);
  }
}

