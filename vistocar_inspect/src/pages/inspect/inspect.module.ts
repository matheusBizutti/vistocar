import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { InspectPage } from './inspect';
import { InspectService } from './inspect.service';

@NgModule({
  declarations: [
    InspectPage,
  ],
  imports: [
    IonicPageModule.forChild(InspectPage),
  ],
  providers: [InspectService]
})
export class InspectPageModule {}
