import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  const isLogged = authService.hasAccess();

  // if (!isLogged) return false;

  return true;
};
