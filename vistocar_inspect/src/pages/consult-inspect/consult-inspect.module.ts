import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ConsultInspectPage } from './consult-inspect';
import { ConsultInspectDetailsPageModule } from '../consult-inspect-details/consult-inspect-details.module';
import { ConsultInspectService } from './consult-inspect.service';

@NgModule({
  declarations: [
    ConsultInspectPage,
  ],
  imports: [
    ConsultInspectDetailsPageModule,
    IonicPageModule.forChild(ConsultInspectPage),
  ],
  providers: [ConsultInspectService]
})
export class ConsultInspectPageModule {}
