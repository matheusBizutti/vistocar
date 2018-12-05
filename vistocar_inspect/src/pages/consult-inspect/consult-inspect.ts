import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ConsultInspectDetailsPage } from '../consult-inspect-details/consult-inspect-details';
import { LoadingService } from '../../app/loading/loading.service';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private loadingService: LoadingService) {}

  ionViewDidLoad() {
    this.loadingService.show();
  }

  ionViewWillEnter() {
    this.loadingService.hide();
  }

  details() {
    const modal = this.modalCtrl.create(ConsultInspectDetailsPage, {testParam: 'AAA'});
    modal.present();
  }

}
