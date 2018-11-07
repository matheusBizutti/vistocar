import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultInspectDetailsPage } from './consult-inspect-details';

@NgModule({
  declarations: [
    ConsultInspectDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultInspectDetailsPage),
  ],
})
export class ConsultInspectDetailsPageModule {}
