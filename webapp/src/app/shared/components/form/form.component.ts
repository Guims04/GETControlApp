import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // atributtes
  @Output() onSubmit: EventEmitter<object> = new EventEmitter<object>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() onImport: EventEmitter<void> = new EventEmitter<void>();

  // constructor

  // angular method

  // our functions
  submit(event: any): void {
    this.onSubmit.emit();
  }
}
