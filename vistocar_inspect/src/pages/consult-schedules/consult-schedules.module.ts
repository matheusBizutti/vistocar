import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultSchedulesPage } from './consult-schedules';

@NgModule({
  declarations: [
    ConsultSchedulesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultSchedulesPage),
  ],
})
export class ConsultSchedulesPageModule {}
