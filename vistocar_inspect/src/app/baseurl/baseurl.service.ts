import { Injectable } from '@angular/core';

@Injectable()
export class BaseUrl {

  private url = 'http://api.vallesites.com.br/index.php/api/';

  constructor() { }

  getBaseUrl() {
    return this.url;
  }

}
