import { Injectable } from '@angular/core';
import {JwtTokenService} from "./jwt-token.service";

@Injectable()
export class AuthService {

  public check: Boolean = false;
  constructor(private jwtToken: JwtTokenService) {
    this.check = jwtToken.getToken() ? true : false;
  }

  logout() {
    this.jwtToken.setToken(null);
    this.check = false;
  }
}
