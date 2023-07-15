import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthKey } from "src/app/app.constants";


@Injectable({ providedIn: "root" })
export class AuthService{

  jwt = new JwtHelperService();
  
  getToken() {
    return sessionStorage.getItem(AuthKey)
  }

  isLogged(): boolean{
    return !this.jwt.isTokenExpired(this.getToken())
  }

}