import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { NavController } from 'ionic-angular';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.authService.getToken()
      }
    });

    return next.handle(request);

  }

  // private handleAuthError(err: HttpErrorResponse): Observable<any> {

  //   const navCtrl = this.injector.get(NavController);
  //   if (err.status === 401) {
  //     navCtrl.push('login');
  //       return Observable.of(err.message);
  //   }

  //   return Observable.throw(err);

  // }

}
