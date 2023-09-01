import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-header-perfil',
  templateUrl: './header-perfil.component.html',
  styleUrls: ['./header-perfil.component.scss']
})
export class HeaderPerfilComponent {

  constructor(private authService: AuthService) { }
  
  logout() {
    this.authService.logout();
  }
}
