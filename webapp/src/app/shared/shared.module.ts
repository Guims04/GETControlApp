import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './components/content/content-header/content-header.component';
import { ContentComponent } from './components/content/content/content.component';
import { FormComponent } from './components/form/form.component';
import { FormActionsComponent } from './components/form/form-actions/form-actions.component';

@NgModule({
  declarations: [
    ContentHeaderComponent,
    ContentComponent,
    FormComponent,
    FormActionsComponent,
  ],
  imports: [CommonModule, TooltipModule],
  exports: [ContentHeaderComponent, ContentComponent, FormComponent],
})
export class SharedModule {}
