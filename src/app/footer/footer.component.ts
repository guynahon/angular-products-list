import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductStore } from '../store/product.store';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  template: `
  <ng-container *mobxAutorun>
    <div>
      <h1 class="footer">Total Amount of Pruducts: {{productStore.totalProducts}}</h1>
    </div>
    </ng-container>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FooterComponent {
  constructor(public productStore: ProductStore) {}
}
