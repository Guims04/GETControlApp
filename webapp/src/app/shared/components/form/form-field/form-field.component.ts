import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  // atributtes
  @Input() label?: string;
  @Input() control?: AbstractControl | FormControl | FormArray;
  @Input() placeholder?: string;
  @Input() maxLength?: number;
  @Input() minlength?: number;
  @Input() appendIcon?: string;

  subscription: Subscription = new Subscription();

  // constructors
  // getters
  public get isRequired(): boolean {
    return true;
  }

  getFormControl(): FormControl {
    if (this.control instanceof FormControl) return this.control;
    else throw new Error('The control is not a FormControl.');
  }

  // angular methods
  ngOnInit(): void {
    console.log(this.label);
  }

  // our methods
  convertUtf8String(value: string): void {
    if (typeof value !== 'string') return value;

    let converted = value
      .replace(new RegExp(/[\u2000]/g), ' ')
      .replace(new RegExp(/[\u2001]/g), ' ')
      .replace(new RegExp(/[\u2002]/g), ' ')
      .replace(new RegExp(/[\u2003]/g), ' ')
      .replace(new RegExp(/[\u2004]/g), ' ')
      .replace(new RegExp(/[\u2005]/g), ' ')
      .replace(new RegExp(/[\u2006]/g), ' ')
      .replace(new RegExp(/[\u2007]/g), ' ')
      .replace(new RegExp(/[\u2008]/g), ' ')
      .replace(new RegExp(/[\u2009]/g), ' ')
      .replace(new RegExp(/[\u200A]/g), ' ')
      .replace(new RegExp(/[\u200B]/g), ' ')
      .replace(new RegExp(/[\u200C]/g), ' ')
      .replace(new RegExp(/[\u200D]/g), ' ')
      .replace(new RegExp(/[\u200E]/g), ' ')
      .replace(new RegExp(/[\u200F]/g), ' ')
      .replace(new RegExp(/[\u2010]/g), '-')
      .replace(new RegExp(/[\u2011]/g), '-')
      .replace(new RegExp(/[\u2012]/g), '-')
      .replace(new RegExp(/[\u2013]/g), '-')
      .replace(new RegExp(/[\u2014]/g), '-')
      .replace(new RegExp(/[\u2015]/g), '-')
      .replace(new RegExp(/[\u2018]/g), "'")
      .replace(new RegExp(/[\u2019]/g), "'")
      .replace(new RegExp(/[\u201A]/g), "'")
      .replace(new RegExp(/[\u201B]/g), "'")
      .replace(new RegExp(/[\u201C]/g), '"')
      .replace(new RegExp(/[\u201D]/g), '"')
      .replace(new RegExp(/[\u201E]/g), '"')
      .replace(new RegExp(/[\u201F]/g), '"')
      .replace(new RegExp(/[\u0300]/g), "'")
      .replace(new RegExp(/[\u0301]/g), "'")
      .replace(new RegExp(/[\u2022]/g), '-')
      .replace(new RegExp(/[\u0100]/g), 'A')
      .replace(new RegExp(/[\u2026]/g), '...')
      .replace(new RegExp(/[\u2070]/g), '°');

    return this.control?.setValue(converted, { emitEvent: false });
  }
}
