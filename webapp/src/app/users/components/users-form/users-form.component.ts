import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent {
  // Atributtes
  @Input() userId?: number;
  form: FormGroup = new FormGroup({});

  // Constructors
  constructor(private fb: FormBuilder, private router: Router) {}

  //Gets
  get active(): any {
    return this.form.get('active');
  }
  get name(): any {
    return this.form.get('name');
  }
  get username(): any {
    return this.form.get('username');
  }
  get password(): any {
    return this.form.get('password');
  }

  // Methods Amgular
  ngOnInit(): void {
    this.initForm();
  }

  // Our Methods
  initForm() {
    this.form = new FormGroup({
      active: new FormControl(false),
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  close() {
    this.router.navigate(['users']);
  }
}
