import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseUrl } from '../../app/baseurl/baseurl.service';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  signIn(body = {}): Observable<any> {
    return this.http.post(this.baseUrl.getBaseUrl() + 'login', body);
  }

}

