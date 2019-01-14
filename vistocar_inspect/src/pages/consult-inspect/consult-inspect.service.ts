import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseUrl } from '../../app/baseurl/baseurl.service';

@Injectable()
export class ConsultInspectService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  getInspects(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getSurveyInformation/2');
  }

}

