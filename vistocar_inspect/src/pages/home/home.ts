import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // inspect: string;

  constructor(public navCtrl: NavController) {}

  consultInspect() {
    this.navCtrl.push('consult-inspect');
  }

  consultSchedules() {
    this.navCtrl.push('consult-schedules');
  }

  exit( ) {
    this.navCtrl.push('login');
  }

  newInspect() {
    this.navCtrl.push('inspect');
  }

}
