import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSearchComponent } from './components/header/header-search/header-search.component';
import { HeaderMessagesComponent } from './components/header/header-messages/header-messages.component';
import { HeaderNotificationsComponent } from './components/header/header-notifications/header-notifications.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeaderSearchComponent,
    HeaderMessagesComponent,
    HeaderNotificationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
