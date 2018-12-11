import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseUrl } from '../../app/baseurl/baseurl.service';

@Injectable()
export class ConsultSchedulesService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  getSchedulesOpen(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllSurveyScheduleOpen');
  }

  getSchedulesClosed(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllSurveyScheduleClose');
  }

  getSchedulesBoard(board = ''): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getSurveyBoard/' + board);
  }

  getSchedulesChassi(chassi = ''): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getSurveyChassi/' + chassi);
  }

}

