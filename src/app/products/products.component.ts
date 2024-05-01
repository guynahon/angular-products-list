import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  template: `
    <ul *ngFor="let p of products; index as i;">
      <li class="product">
        {{p.name}}
        <button class="plus" (click)="addOne(i)">+</button>
        <button class="minus" (click)="removeOne(i)">-</button>
        <div>Total: {{p.total}}</div>
        <div>Total Price: {{p.productTotalPrice}}$</div>
      </li>
    </ul>
    <h1>Total Price: {{totalPrice}}$</h1>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {name: 'tomato', total: 0, price: 2, productTotalPrice: 0},
    {name: 'cucumber', total: 0, price: 1, productTotalPrice: 0},
    {name: 'onion', total: 0, price: 1, productTotalPrice: 0},
    {name: 'apple', total: 0, price: 3, productTotalPrice: 0},
    {name: 'banana', total: 0, price: 4, productTotalPrice: 0}
  ];

  totalPrice = 0;


  addOne(index: number) {
    this.products[index].total++;
    this.products[index].productTotalPrice += this.products[index].price;
    this.totalPrice += this.products[index].price;
  }

  removeOne(index: number) {
    if (this.products[index].total > 0) {
      this.products[index].total--;
      this.products[index].productTotalPrice -= this.products[index].price;
      this.totalPrice -= this.products[index].price;
    }
  }
}
