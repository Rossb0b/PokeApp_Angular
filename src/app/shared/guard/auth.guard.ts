// import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
  ) {}

  canActivate(): boolean {
    const isAuth = this.authService.isLoggedIn();
    if (!isAuth) {
      return true;
    }
    return isAuth;
  }
}
