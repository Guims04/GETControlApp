import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarPerfilComponent } from './components/sidebar/sidebar-perfil/sidebar-perfil.component';
import { SidebarSearchComponent } from './components/sidebar/sidebar-search/sidebar-search.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarPerfilComponent,
    SidebarSearchComponent,
    SidebarMenuComponent
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
