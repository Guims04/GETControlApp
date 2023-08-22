import { Component, Input } from '@angular/core';
import { FormFieldComponent } from '../form-field.component';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-field-number',
  templateUrl: './form-field-number.component.html',
  styleUrls: ['./form-field-number.component.scss'],
  providers: [provideNgxMask()]
})
export class FormFieldNumberComponent extends FormFieldComponent {
  // atributtes
  @Input() mask: string = '0*';

  // constructors
  constructor() {
    super();
  }
  // getters
  // angular methods
  override ngOnInit(): void {
  }
  // our methods
}
