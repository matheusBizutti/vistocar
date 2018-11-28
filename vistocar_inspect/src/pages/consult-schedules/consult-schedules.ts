import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'consult-schedules'
})
@Component({
  selector: 'page-consult-schedules',
  templateUrl: 'consult-schedules.html',
})
export class ConsultSchedulesPage {

  status: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultSchedulesPage');
  }

}
