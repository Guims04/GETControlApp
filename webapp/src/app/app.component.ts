import {
  ChangeDetectionStrategy,
  Component,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';
import { DarkModeService } from './core/services/dark-mode/dark-mode.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Attributes
  title = 'webapp';
  isDarkMode: boolean = false;
  subscription: Subscription = new Subscription();
  isLogged: boolean = false;

  // Constructor
  constructor(
    private authService: AuthService,
    private router: Router,
    private darkModeService: DarkModeService
  ) {}

  // Angular Methods
  ngOnInit(): void {

    this.subscription.add(
      this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
        this.isDarkMode = isDarkMode;
      })
    );
    this.subscription.add(
      this.authService.isLoggedIn.subscribe((loggedIn) => {
        this.isLogged = loggedIn;
        if (!this.isLogged) this.router.navigate(['/login']);
      })
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Methods
}
