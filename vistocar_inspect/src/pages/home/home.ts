import { Component } from '@angular/core';

import { NavController, IonicPage, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthService } from '../../app/auth/auth.service';
import { InspectService } from '../inspect/inspect.service';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private authService: AuthService,
              private storage: Storage,
              private inspectService: InspectService,
              private alertCtrl: AlertController) {
  }

  async ionViewCanEnter() {
    const data = await this.storage.get('inspectPost');

    if (navigator.onLine && data) {

      for(let i in data) {
        this.inspectService.setReceiving(data[i]).subscribe(response => {
          console.log(response);
        }, err => {
          console.log(err);
        });
      }

      this.storage.remove('inspectPost');
      let alert = this.alertCtrl.create({
        title: 'Sinal de rede recebido.',
        subTitle: 'A(s) vistoria(s) que estava(m) aguardando rede, foi/foram enviada(s).',
        buttons: ['Fechar']
      });
      alert.present();
    }
  }

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
