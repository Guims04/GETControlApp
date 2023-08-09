import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  // atributtes
  @Input() label?: string;

  // constructors
  // getters
  public get isRequired(): boolean {
    return true;
  }

  // angular methods
  // our methods
}
