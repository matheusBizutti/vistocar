import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { ConsultSchedulesPage } from './consult-schedules';
import { ConsultSchedulesService } from './consult-schedules.service';

@NgModule({
  declarations: [
    ConsultSchedulesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultSchedulesPage),
  ],
  providers: [ConsultSchedulesService]
})
export class ConsultSchedulesPageModule {}
