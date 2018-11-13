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

  inspect = 'vehicle';
  inspectData = {
    customer: '',
    auction: '',
    lotNumber: undefined ,
    surveyType: '',
    vehiclecategory: '',
    servicetype: '',
    boardcondition: '',
    board: '',
    ufboard: '',
    cityboard: '',
    motornumber: '',
    motornumberbin: '',
    motorcondition: '',
    chassinumber: '',
    chassinumberbin: '',
    chassicondition: '',
    exchangenumber: '',
    exchangenumberbin: '',
    renavamnumber: undefined,
    kitgnv: false,
    vehiclebrand: '',
    vehiclemodel: '',
    yearmodel: undefined,
    yearfabrication: undefined,
    color: '',
    fuel: '',
    observation: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectPage');
  }

  navigate() {
    switch(this.inspect) {
      case 'vehicle': {
        this.inspect = 'caveat';
        break;
      }
      case 'caveat': {
        this.inspect = 'pictures';
        break;
      }
      case 'pictures': {
        this.inspect = 'end';
        break;
      }
      default: {
        this.inspect = 'vehicle';
        break;
      }
    }
  }

  back() {
    switch(this.inspect) {
      case 'caveat': {
        this.inspect = 'vehicle';
        break;
      }
      case 'pictures': {
        this.inspect = 'caveat';
        break;
      }
      case 'end': {
        this.inspect = 'pictures';
        break;
      }
      default: {
        this.inspect = 'vehicle';
        break;
      }
    }
  }

  selectChange(e) {
    console.log(e);
  }

}
