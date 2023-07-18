import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';
import { DarkModeService } from './core/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Attributes
  title = 'webapp';
  isDarkMode: boolean = false;

  // Constructor
  constructor(
    private authService: AuthService,
    private router: Router,
    private darkModeService: DarkModeService
  ) {}

  // Angular Methods
  ngOnInit(): void {
    if (!this.isLogged || !this.authService.getToken())
      this.router.navigate(['login']);

    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  // Methods
  public get isLogged(): boolean {
    return this.authService.isLogged();
  }
}
