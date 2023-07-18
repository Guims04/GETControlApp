import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarPerfilComponent } from './components/sidebar/sidebar-perfil/sidebar-perfil.component';
import { SidebarSearchComponent } from './components/sidebar/sidebar-search/sidebar-search.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './components/sidebar/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';
import { RouterModule } from '@angular/router';
import { HeaderSearchComponent } from './components/header/header-search/header-search.component';
import { HeaderMessagesComponent } from './components/header/header-messages/header-messages.component';
import { HeaderNotificationsComponent } from './components/header/header-notifications/header-notifications.component';
import { HeaderToggleThemeComponent } from './components/header/header-toggle-theme/header-toggle-theme.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarPerfilComponent,
    SidebarSearchComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    HeaderSearchComponent,
    HeaderMessagesComponent,
    HeaderNotificationsComponent,
    HeaderToggleThemeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
