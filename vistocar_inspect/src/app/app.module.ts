import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { ConsultInspectPageModule } from '../pages/consult-inspect/consult-inspect.module';
import { BaseUrl } from './baseurl/baseurl.service';
import { AuthService } from './auth/auth.service';
import { LoginService } from '../pages/login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './interceptor/interceptor.module';
import { InspectPageModule } from '../pages/inspect/inspect.module';
import { LoadingService } from './loading/loading.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    LoginPageModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    InterceptorModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    InspectPageModule,
    ConsultInspectPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BaseUrl,
    LoginService,
    LoadingService,
    CookieService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
