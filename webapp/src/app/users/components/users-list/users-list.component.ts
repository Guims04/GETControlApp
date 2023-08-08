import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../service/users.service';
import { IUsers } from '../../users.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  //atributtes
  subscriptions: Subscription = new Subscription();
  users?: IUsers[];

  //constructor
  constructor(private usersService: UsersService) {}

  // funcoes do angula
  ngOnInit(): void {
    this.getUserList();
  }

  //get user list
  getUserList() {
    this.subscriptions.add(
      this.usersService.getAll().subscribe((data) => {
        this.users = data;
      })
    );
  }
}
