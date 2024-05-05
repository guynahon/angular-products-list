import { Component } from '@angular/core';
import { ProductStore } from '../store/product.store';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2 class="footer">Total Price: {{productStore.totalPrice}}$</h2>
    `,
  styleUrl: './total.component.css',
})
export class TotalComponent {
  constructor(public productStore: ProductStore){}
}
