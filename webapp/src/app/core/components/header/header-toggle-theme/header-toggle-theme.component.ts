import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/core/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-header-toggle-theme',
  templateUrl: './header-toggle-theme.component.html',
  styleUrls: ['./header-toggle-theme.component.scss']
})
export class HeaderToggleThemeComponent {
  isDarkMode: boolean = false;

  constructor(
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode
    this.darkModeService.setDarkMode(this.isDarkMode);
  }
}
