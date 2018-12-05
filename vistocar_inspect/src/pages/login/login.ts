import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../app/auth/auth.service';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../app/loading/loading.service';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials = {
    password: '',
    username: ''
  }

  subscription: Subscription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private loginService: LoginService,
              private alertCtrl: AlertController,
              private loadingService: LoadingService) { }

  ionViewDidLoad() {}

  ionViewDidLeave() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  login() {

    const credentials = {
      username: "05687107975",
      password:"admin"
    };

    this.loadingService.show();

    this.subscription = this.loginService.signIn(credentials).subscribe(response => {
      this.authService.setToken(response);
      this.loadingService.hide();
      this.navCtrl.push('home');
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Acesso inválido',
        subTitle: 'Por favor verifique o usuário e senha.',
        buttons: ['Fechar']
      });
      alert.present();
      this.loadingService.hide();
      console.log('falha na autenticação: ', err);
    })
  }

}
