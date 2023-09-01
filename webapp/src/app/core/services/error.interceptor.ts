import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      return next.handle(request).pipe(
        catchError(err => {
          let error = {};

          if (err.status === 401 || err.status === 504) {
            error = err.statusText;
            
            if (!this.authService.hasAccess()) this.authService.logout();
          } else if (err.error === null) {
            error = 'Something went wrong...';
          } else {
            error = err;
          }

          return throwError(error);
        })
      );
    } catch (error) {
      return throwError(error);
    }
  }
}
