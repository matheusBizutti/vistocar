import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/auth/auth.service';
import { LoginService } from './login.service';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private loginService: LoginService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    const credentials = {
      username: "05687107975",
      password:"admin"
    };

    this.loginService.signIn(credentials).subscribe(response => {
      console.log('token: ', response);
      this.authService.setToken(response);
      this.navCtrl.push('home');
    }, err => {
      console.log('falha na autenticação: ', err);
    })
  }

}
