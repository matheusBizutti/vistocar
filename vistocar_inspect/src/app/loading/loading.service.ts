import { Injectable } from '@angular/core';

import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {

  loading: any;

  constructor(public loadingCtrl: LoadingController) {}

  show() {
    this.loading = this.loadingCtrl.create({
      content: '',
      dismissOnPageChange: true
    });

    this.loading.present();
  }

  hide() {
    this.loading.dismiss();
  }

}
