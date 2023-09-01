import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './components/users-form/users-form.component';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UsersFormComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
