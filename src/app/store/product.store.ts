import { Injectable } from "@angular/core";
import { observable, action, computed } from "mobx";

@Injectable({
    providedIn: 'root'
})
export class ProductStore {
    @observable products = [
        { name: 'tomato🍅', total: 0, price: 2, productTotalPrice: 0 },
        { name: 'cucumber🥒', total: 0, price: 1, productTotalPrice: 0 },
        { name: 'onion🧅', total: 0, price: 1, productTotalPrice: 0 },
        { name: 'apple🍏', total: 0, price: 3, productTotalPrice: 0 },
        { name: 'banana🍌', total: 0, price: 4, productTotalPrice: 0 }
    ];

    @action addOne(index: number) {
        this.products[index].total++;
        this.products[index].productTotalPrice += this.products[index].price;        
    }

    @action removeOne(index: number) {
        if (this.products[index].total > 0) {
            this.products[index].total--;
            this.products[index].productTotalPrice -= this.products[index].price;
        }
    }

    @computed totalPrice() {
        return this.products.reduce((current, product) => current + product.productTotalPrice, 0)
    }
}