import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthKey } from 'src/app/app.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  jwt = new JwtHelperService();
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasAccess() || false);

  constructor() { }

  setToken(token: string) {
    return sessionStorage.setItem(AuthKey, token);
  }

  getToken() {
    return sessionStorage.getItem(AuthKey);
  }

  hasAccess(): boolean {
    return !this.jwt.isTokenExpired(this.getToken());
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  login() {
    this.loggedInSubject.next(true);
  }

  logout() {
    this.loggedInSubject.next(false);
    console.log('ue');
  }
}
