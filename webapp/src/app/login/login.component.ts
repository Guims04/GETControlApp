import { Component } from '@angular/core';
import { DarkModeService } from '../core/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  isDarkMode: boolean = false;

  constructor(
    private darkModeService: DarkModeService,
  ){}
  
  ngOnInit(): void {
    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
