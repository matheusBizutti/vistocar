import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspectPage } from './inspect';

import IonicStepperModule from 'ionic-stepper';

@NgModule({
  declarations: [
    InspectPage,
  ],
  imports: [
    IonicStepperModule,
    IonicPageModule.forChild(InspectPage),
  ],
})
export class InspectPageModule {}
