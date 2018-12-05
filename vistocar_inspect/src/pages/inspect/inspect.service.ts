import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseUrl } from '../../app/baseurl/baseurl.service';

@Injectable()
export class InspectService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  getColors(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getColors');
  }

  getFuel(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllFuel');
  }

  getAuction(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAuction');
  }

}

