import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";

const TOKEN_KEY = 'token';

@Injectable()
export class JwtTokenService {

  constructor(private localStorage: LocalStorageService) { }

  getToken() {
    return this.localStorage.get(TOKEN_KEY);
  }

  setToken(value) {
    value ? this.localStorage.set(TOKEN_KEY, value.token) : this.localStorage.remove(TOKEN_KEY);
  }
}
