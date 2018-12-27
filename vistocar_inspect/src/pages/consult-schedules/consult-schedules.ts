import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingService } from '../../app/loading/loading.service';
import { Observable } from 'rxjs';
import { ConsultSchedulesService } from './consult-schedules.service';

@IonicPage({
  name: 'consult-schedules'
})
@Component({
  selector: 'page-consult-schedules',
  templateUrl: 'consult-schedules.html',
})
export class ConsultSchedulesPage {

  board: string = '';
  chassi: string = '';
  status: boolean;
  schedulesBoard;
  schedulesChassi;
  schedulesByStatusOpen;
  schedulesByStatusClosed;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingService: LoadingService,
              private consultSchedulesService: ConsultSchedulesService) {
  }

  ionViewDidLoad() {
    this.loadingService.show();
  }

  ionViewWillEnter() {
    this.loadingService.hide();
  }

  filter () {

    if (!this.board && !this.chassi) {

      console.log(this.status);

      this.status ? this.schedulesByStatusOpen = this.getSchedulesByStatusOpen() : this.schedulesByStatusClosed = this.getSchedulesByStatusClosed();

      // if (this.status) {
      //   console.log('entrei acima');
      //   this.schedulesByStatusOpen = this.getSchedulesByStatusOpen();
      // } else {
      //   console.log('entrei');
      //   this.schedulesByStatusClosed = this.getSchedulesByStatusClosed();
      // }

    } else {

      if (this.board) {
        console.log('entrei tiozao;');
        this.schedulesBoard = this.getSchedulesBoard();
      } else if (this.chassi) {
        this.schedulesChassi = this.getScheduleChassi();
      }

    }
  }

  getSchedulesByStatusOpen(): Observable<any> {
    return this.consultSchedulesService.getSchedulesOpen();
  }

  getSchedulesByStatusClosed(): Observable<any> {
    return this.consultSchedulesService.getSchedulesClosed();
  }

  getSchedulesBoard(): Observable<any> {
    return this.consultSchedulesService.getSchedulesBoard(this.board);
  }

  getScheduleChassi(): Observable<any> {
    return this.consultSchedulesService.getSchedulesChassi(this.chassi);
  }

  getStatus(status = ''): string {

    let statusReturn = '';

    switch(status) {
      case '-1': {
        statusReturn = 'Vistoria não efetuada';
        break;
      }
      case '1': {
        statusReturn = 'Vistoria efetuada';
        break;
      }
      case '0': {
        statusReturn = 'Vistoria cancelada'
      }
    }

    return statusReturn;
  }
}
