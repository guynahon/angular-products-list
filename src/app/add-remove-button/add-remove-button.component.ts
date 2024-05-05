import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-remove-button',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <button size="small" [style]="buttonStyle" (click)="onClick()">{{sign}}</button>
  `,
  styleUrl: './add-remove-button.component.css'
})
export class AddRemoveButtonComponent {
  @Input() sign: string = "";
  @Input() func: (index: number) => void = () => {};
  @Input() index: number = NaN;


  buttonStyle = {
    'width': '10px',
    'height': '10px',
  };

  onClick() {    
    this.func(this.index);
  }
}
