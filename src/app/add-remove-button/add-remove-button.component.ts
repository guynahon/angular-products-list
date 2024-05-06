import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductStore } from '../store/product.store';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-add-remove-button',
  standalone: true,
  imports: [ButtonModule, SharedModule],
  template: `
    <ng-container *mobxAutorun>
      <p-button size="small" [style]="buttonStyle" (click)="onClick()" [disabled]="isDisabled()">{{sign}}</p-button>
    </ng-container>
  `,
  styleUrl: './add-remove-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddRemoveButtonComponent {
  @Input() sign: string = "";
  @Input() func: (index: number) => void = () => {};
  @Input() index: number = NaN;

  constructor(public productStore: ProductStore) {}


  buttonStyle = {
    'width': '10px',
    'height': '10px',
  };

  onClick() {    
    this.func(this.index);
  }

  isDisabled() {
    if (this.productStore.products[this.index].total === 0 && this.sign === "-") {
      return true;
    }
    return false;
  }
}
