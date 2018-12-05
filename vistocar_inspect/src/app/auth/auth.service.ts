import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  private token: string;

  constructor(private cookieService: CookieService) { }

  clear() {
    this.token = undefined;
    this.cookieService.delete( 'token', '/' );
    this.cookieService.delete( 'userType', '/' );
  }

  getToken() {
    if (!this.token && this.cookieService.check('token')) {
      this.setToken(this.cookieService.get('token'));
    }
    return this.token;
  }

  setToken(token) {
    this.token = token['Authorization'];
    this.cookieService.set( 'token', this.token, undefined, '/' );
  }

}
