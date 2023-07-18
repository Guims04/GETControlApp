import { AuthService } from './../../../core/services/auth.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  // Attributs
  form: FormGroup = new FormGroup({});
  submitted: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  //Gets
  get username(): any {
    return this.form.get('username');
  }
  get password(): any {
    return this.form.get('password');
  }

  // Angular Methods
  ngOnInit(): void {
    sessionStorage.clear();

    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Methods
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) return;
    this.subscription.unsubscribe();

    this.subscription = this.loginService
      .login(this.username.value, this.password.value)
      .subscribe(
        (data) => {
          this.authService.setToken(data.token);
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
