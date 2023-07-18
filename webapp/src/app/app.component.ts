import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Attributes
  title = 'webapp';

  // Constructor
  constructor(private authService: AuthService, private router: Router) {}

  // Angular Methods
  ngOnInit(): void {
    if (!this.isLogged || !this.authService.getToken())
      this.router.navigate(['login']);
  }

  // Methods
  public get isLogged(): boolean {
    return this.authService.isLogged();
  }
}
