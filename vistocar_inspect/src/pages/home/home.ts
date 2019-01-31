import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthService } from '../../app/auth/auth.service';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // inspect: string;

  constructor(public navCtrl: NavController,
              private authService: AuthService,
              private storage: Storage) {}

  consultInspect() {
    this.navCtrl.push('consult-inspect');
  }

  consultSchedules() {
    this.navCtrl.push('consult-schedules');
  }

  exit( ) {
    this.authService.clear();
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
    this.navCtrl.push('login');
  }

  newInspect() {
    this.navCtrl.push('inspect');
  }

}
