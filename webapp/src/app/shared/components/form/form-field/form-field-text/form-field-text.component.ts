import { Component, Input } from '@angular/core';
import { FormFieldComponent } from '../form-field.component';

@Component({
  selector: 'app-form-field-text',
  templateUrl: './form-field-text.component.html',
  styleUrls: ['./form-field-text.component.scss'],
})
export class FormFieldTextComponent extends FormFieldComponent {
  // atributtes
  @Input() uppercase?: boolean;

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
  // our methods
}
