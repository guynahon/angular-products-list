import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductStore } from '../store/product.store';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-add-remove-button',
  standalone: true,
  imports: [ButtonModule, SharedModule],
  template: `
    <ng-container *mobxAutorun>
      <p-button size="small" [style]="buttonStyle" (click)="callParentAdd()" (click)="callParentRemove()" [disabled]="isDisabled()">{{sign}}</p-button>
    </ng-container>
  `,
  styleUrl: './add-remove-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRemoveButtonComponent {
  @Input() sign: string = "";
  @Input() index: number = 0;

  @Output() addEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  constructor(public productStore: ProductStore) {}

  callParentAdd() {
    this.addEvent.emit();
  }

  callParentRemove() {
    this.removeEvent.emit();
  }

  buttonStyle = {
    'width': '10px',
    'height': '10px',
  };

  isDisabled() {
    if (this.productStore.products[this.index].total === 0 && this.sign === "-") {
      return true;
    }
    return false;
  }
}
