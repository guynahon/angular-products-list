import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductStore } from '../store/product.store';
import { NgFor } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [NgFor,SharedModule],
  template: `
  <ng-container *mobxAutorun>
    <h2 class="footer">Total Price: {{productStore.totalPrice}}$</h2>
    </ng-container>
    `,
  styleUrl: './total.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TotalComponent {
  constructor(public productStore: ProductStore){}
}
