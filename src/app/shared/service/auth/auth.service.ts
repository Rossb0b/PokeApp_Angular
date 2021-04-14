import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from '../../interface/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();

  constructor(
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  login(user: User): Promise<any> {
    return this.apiService.post('/auth', user);
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.userService.setUser(null);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt') || '';
    return !this.jwtHelper.isTokenExpired(token);
  }
}
