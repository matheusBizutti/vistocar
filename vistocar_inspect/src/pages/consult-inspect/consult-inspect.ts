import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ConsultInspectDetailsPage } from '../consult-inspect-details/consult-inspect-details';

/**
 * Generated class for the ConsultInspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'consult-inspect'
})
@Component({
  selector: 'page-consult-inspect',
  templateUrl: 'consult-inspect.html',
})
export class ConsultInspectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultInspectPage');
  }

  details() {
    const modal = this.modalCtrl.create(ConsultInspectDetailsPage, {testParam: 'AAA'});
    modal.present();
  }

}
