import { Component, Input } from '@angular/core';
import { FormFieldComponent } from '../form-field.component';

@Component({
  selector: 'app-form-field-password',
  templateUrl: './form-field-password.component.html',
  styleUrls: ['./form-field-password.component.scss'],
})
export class FormFieldPasswordComponent extends FormFieldComponent {
  // atributtes

  // constructors
  constructor() {
    super();
  }
  // getters
  // angular methods
  override ngOnInit(): void {
    this.subscription.add(
      this.control?.valueChanges.subscribe((value) => {
        this.convertUtf8String(value);
      })
    );
  }
}
