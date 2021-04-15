import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // We check if url request is our api
    if (req.url.includes('https://pokeapi.co/api/v2/') || req.url.includes('http://localhost:3000')) {
      const authToken = localStorage.getItem('jwt');
      const authRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken),
      });
      return next.handle(authRequest);
    }
    return next.handle(req);
  }
}
