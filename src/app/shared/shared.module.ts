import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStore } from '../store/product.store';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductStore]
})
export class SharedModule { }
