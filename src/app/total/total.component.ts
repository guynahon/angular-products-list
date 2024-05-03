import { Component } from '@angular/core';
import { ProductStore } from '../store/product.store';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [NgFor],
  template: `
    <ul class="total">
      <li class="single-product" *ngFor="let p of productStore.products; index as i;">
        <div>{{p.productTotalPrice}}$</div>
      </li>
    </ul>
    `,
  styleUrl: './total.component.css'
})
export class TotalComponent {
  constructor(public productStore: ProductStore){}
}
