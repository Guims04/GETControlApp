import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './components/content/content-header/content-header.component';
import { ContentComponent } from './components/content/content/content.component';
import { FormComponent } from './components/form/form.component';
import { FormActionsComponent } from './components/form/form-actions/form-actions.component';
import { FormFieldComponent } from './components/form/form-field/form-field.component';
import { FormFieldTextComponent } from './components/form/form-field/form-field-text/form-field-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentHeaderComponent,
    ContentComponent,
    FormComponent,
    FormActionsComponent,
    FormFieldComponent,
    FormFieldTextComponent,
  ],
  imports: [CommonModule, TooltipModule, ReactiveFormsModule, FormsModule],
  exports: [
    ContentHeaderComponent,
    ContentComponent,
    FormComponent,
    FormFieldComponent,
    FormFieldTextComponent,
  ],
})
export class SharedModule {}
