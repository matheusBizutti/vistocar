import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  credentials = {
    password: '',
    username: ''
  }

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push('about');
  }

}
