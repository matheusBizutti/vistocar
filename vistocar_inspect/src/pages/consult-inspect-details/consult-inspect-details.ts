import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'consult-inspect-details'
})
@Component({
  selector: 'page-consult-inspect-details',
  templateUrl: 'consult-inspect-details.html',
})
export class ConsultInspectDetailsPage {

  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log(params.get('testParam'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultInspectDetailsPage');
  }

}
