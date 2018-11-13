import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { ConsultInspectPageModule } from '../pages/consult-inspect/consult-inspect.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    LoginPageModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ConsultInspectPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
