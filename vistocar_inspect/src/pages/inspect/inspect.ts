import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CameraOptions, Camera } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';


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

  // - checkbox ressalvas;
  checkbox01 = false;
  checkbox02 = false;
  checkbox03 = false;
  checkbox04 = false;

  // - imagens
  image = '';
  image1 = '';
  image2 = '';
  image3 = '';
  image4 = '';
  image5 = '';
  image6 = '';
  image7 = '';
  image8 = '';
  image9 = '';
  image10 = '';
  image11 = '';
  image12 = '';
  image13 = '';
  image14 = '';
  image15 = '';
  image16 = '';
  image17 = '';
  image18 = '';
  image19 = '';
  image20 = '';
  image21 = '';

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
    observation: '',
    caveat: [
      {
        description: 'Ausência de gravação em todos os vidros',
        use: this.checkbox01
      },
      {
        description: 'Ausência parcial de numeração nos vidros',
        use: this.checkbox02
      },
      {
        description: 'Veículo blindado',
        use: this.checkbox03
      },
      {
        description: 'Vidro com num. do chassi sem vestígio de adulteração',
        use: this.checkbox04
      }
    ],
    pictures: [
      {
        id: '01',
        type: 'DIANTEIRA DIAGONAL DIREITA',
        file: this.image1
      },
      {
        id: '02',
        type: 'TRASEIRA DIAGONAL ESQUERDA',
        file: this.image2
      },
      {
        id: '03',
        type: 'AUTO APREENSÃO',
        file: this.image3
      },
      {
        id: '04',
        type: 'PAINEL QUILOMETRAGEM',
        file: this.image4
      },
      {
        id: '05',
        type: 'CLRV',
        file: this.image5
      },
      {
        id: '06',
        type: 'COMP MOTOR',
        file: this.image6
      },
      {
        id: '07',
        type: 'CHASSI',
        file: this.image7
      },
      {
        id: '08',
        type: 'MOTOR',
        file: this.image8
      },
      {
        id: '09',
        type: 'PLACA',
        file: this.image9
      },
      {
        id: '10',
        type: 'APARELHO DE SOM',
        file: this.image10
      },
      {
        id: '11',
        type: 'PORTA MALAS',
        file: this.image11
      },
      {
        id: '12',
        type: 'AVARIA 1',
        file: this.image12
      },
      {
        id: '13',
        type: 'AVARIA 2',
        file: this.image13
      },
      {
        id: '14',
        type: 'AVARIA 3',
        file: this.image14
      },
      {
        id: '15',
        type: 'AVARIA 4',
        file: this.image15
      },
      {
        id: '16',
        type: 'AVARIA 5',
        file: this.image16
      },
      {
        id: '17',
        type: 'ADICIONAL 1',
        file: this.image17
      },
      {
        id: '18',
        type: 'ADICIONAL 2',
        file: this.image18
      },
      {
        id: '19',
        type: 'ADICIONAL 3',
        file: this.image19
      },
      {
        id: '20',
        type: 'ADICIONAL 4',
        file: this.image20
      },
      {
        id: '21',
        type: 'ADICIONAL 5',
        file: this.image21
      }
    ]
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private camera: Camera,
              private domSanitizer: DomSanitizer) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectPage');
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

  selectChange(e) {
    console.log(e);
  }

  setImage(image, imageData) {

    switch(image) {
      case '01': {
        this.image1 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '02': {
        this.image2 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '03': {
        this.image3 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '04': {
        this.image4 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '05': {
        this.image5 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '06': {
        this.image6 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '07': {
        this.image7 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '08': {
        this.image8 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '09': {
        this.image9 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '10': {
        this.image10 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '11': {
        this.image11 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '12': {
        this.image12 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '13': {
        this.image13 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '14': {
        this.image14 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '15': {
        this.image15 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '16': {
        this.image16 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '17': {
        this.image17 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '18': {
        this.image18 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '19': {
        this.image19 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '20': {
        this.image20 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
      case '21': {
        this.image21 = 'data:image/jpeg;base64,' + imageData;;
        break;
      }
    }

  }

  takePicture(image = '') {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {

     this.setImage(image, imageData);

     console.log(this.image);
    }, (err) => {
     console.log(err);
    });

  }

}
