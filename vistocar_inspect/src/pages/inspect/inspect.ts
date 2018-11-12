import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'inspect'
})
@Component({
  selector: 'page-inspect',
  templateUrl: 'inspect.html',
})
export class InspectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectPage');
  }

  selectChange(e) {
    console.log(e);
  }

}
