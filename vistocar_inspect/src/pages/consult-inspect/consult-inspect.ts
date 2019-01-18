import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ConsultInspectDetailsPage } from '../consult-inspect-details/consult-inspect-details';
import { LoadingService } from '../../app/loading/loading.service';
import { ConsultInspectService } from './consult-inspect.service';

@IonicPage({
  name: 'consult-inspect'
})
@Component({
  selector: 'page-consult-inspect',
  templateUrl: 'consult-inspect.html',
})
export class ConsultInspectPage {

  inspects: Array<Object> = [
    {
      board: 'XJS-0701',
      inspectType: 'A',
      status: 'Finalizado'
    },
    {
      board: 'XJS-0702',
      inspectType: 'A',
      status: 'Pendente'
    },
    {
      board: 'XJS-0703',
      inspectType: 'A',
      status: 'Finalizado'
    },
    {
      board: 'ABC-1264',
      inspectType: 'B',
      status: 'Pendente'
    },
    {
      board: 'ABC-0101',
      inspectType: 'A',
      status: 'Finalizado'
    },
  ];

  data: any;
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  items = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private loadingService: LoadingService,
              private consultInspectService: ConsultInspectService) {

    this.getInspects();
  }

  getInspects() {
    this.consultInspectService.getInspects().subscribe(res => {
      this.data = res;

      if (this.data.length >= 15) {
        for (let i = 0; i < 15; i++) {
          this.items.push(this.data[i]);
        }
      } else {
        this.items = this.data;
      }

    }, error => (this.errorMessage = <any>error));

  }

  doInfinite(infiniteScroll) {

    const total = this.items.length + 15;
    setTimeout(() => {

      for (let i = this.items.length; i < total; i++) {
        if (this.data[i]) {
          this.items.push( this.data[i] );
          this.page += 1;
        }
      }

      infiniteScroll.complete();
    }, 1000);
  }

  ionViewDidLoad() {
    this.loadingService.show();
  }

  ionViewWillEnter() {
    this.loadingService.hide();
  }

  details(inspect = {}) {
    const modal = this.modalCtrl.create(ConsultInspectDetailsPage, {inspect: inspect});
    modal.present();
  }

  setStatusOfInspect(inspectType = '') {
    return inspectType === '-1' ? 'Pendente' : 'Finalizado';
  }

}
