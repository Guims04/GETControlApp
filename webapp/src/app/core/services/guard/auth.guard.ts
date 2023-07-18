import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  const isLogged = authService.isLogged();

  if (!isLogged) return false;

  return true;
};
