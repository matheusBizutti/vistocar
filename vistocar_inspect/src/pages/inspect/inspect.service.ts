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

  getBoardCondition(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllBoardCondition');
  }

  getChassis(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllChassis');
  }

  getStates(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllStates');
  }

  getExchanges(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllExchange');
  }

  getModels(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllModel');
  }

  getBrands(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllBrand');
  }

  getEngineers(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllEngineer');
  }

  getVehicleCategory(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllVehicleCategory');
  }

  getCustomers(): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'getAllCustomers');
  }
}

