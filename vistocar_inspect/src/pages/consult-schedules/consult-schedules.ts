import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingService } from '../../app/loading/loading.service';

@IonicPage({
  name: 'consult-schedules'
})
@Component({
  selector: 'page-consult-schedules',
  templateUrl: 'consult-schedules.html',
})
export class ConsultSchedulesPage {

  status: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingService: LoadingService) {
  }

  ionViewDidLoad() {
    this.loadingService.show();
  }

  ionViewWillEnter() {
    this.loadingService.hide();
  }

}
