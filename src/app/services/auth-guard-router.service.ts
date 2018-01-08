import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardRouterService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      if (this.auth.check) {
          return true;
      }

      this.router.navigate(['login']);
      return false;
  }

  constructor(private auth: AuthService, private router: Router) { }

}
