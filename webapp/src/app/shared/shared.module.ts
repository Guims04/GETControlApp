import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './components/content/content-header/content-header.component';
import { ContentComponent } from './components/content/content/content.component';

@NgModule({
  declarations: [ContentHeaderComponent, ContentComponent],
  imports: [CommonModule],
  exports: [ContentHeaderComponent, ContentComponent],
})
export class SharedModule {}
