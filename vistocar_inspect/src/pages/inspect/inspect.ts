import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CameraOptions, Camera } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { InspectService } from './inspect.service';
import { LoadingService } from '../../app/loading/loading.service';

@IonicPage({
  name: 'inspect'
})
@Component({
  selector: 'page-inspect',
  templateUrl: 'inspect.html',
})
export class InspectPage {

  // - checkbox ressalvas;
  caveat01 = false;
  caveat02 = false;
  caveat03 = false;
  caveat04 = false;

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
        use: this.caveat01
      },
      {
        description: 'Ausência parcial de numeração nos vidros',
        use: this.caveat02
      },
      {
        description: 'Veículo blindado',
        use: this.caveat03
      },
      {
        description: 'Vidro com num. do chassi sem vestígio de adulteração',
        use: this.caveat04
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

  auctions: Array<Object>;
  boardCondition: Array<Object>;
  chassis: Array<Object>;
  colors: Array<Object>;
  customers: Array<Object>;
  engineers: Array<Object>;
  fuels: Array<Object>;
  vehicleCategories: Array<Object>;
  states: Object = {};

  subscriptionAuction: Subscription;
  subscriptionBoardCondition: Subscription;
  subscriptionChassis: Subscription;
  subscriptionCategories: Subscription;
  subscriptionColors: Subscription;
  subscriptionEngineers: Subscription;
  subscriptionCustomers: Subscription;
  subscriptionFuel: Subscription;
  subscriptionStates: Subscription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private camera: Camera,
              private domSanitizer: DomSanitizer,
              private inspectService: InspectService,
              private loadingService: LoadingService) {}

  ionViewDidLoad() {

    this.loadingService.show();
    this.subscriptionColors = this.inspectService.getColors().subscribe(response => {
      this.colors = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionFuel = this.inspectService.getFuel().subscribe(response => {
      this.fuels = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionAuction = this.inspectService.getAuction().subscribe(response => {
      this.auctions = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionCustomers = this.inspectService.getCustomers().subscribe(response => {
      this.customers = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionCategories = this.inspectService.getVehicleCategory().subscribe(response => {
      this.vehicleCategories = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionBoardCondition = this.inspectService.getBoardCondition().subscribe(response => {
      this.boardCondition = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionStates = this.inspectService.getStates().subscribe(response => {
      this.states = response;
    }, err => {
      console.log(err);
    });

    this.subscriptionEngineers = this.inspectService.getEngineers().subscribe(response => {
      this.engineers = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionChassis = this.inspectService.getChassis().subscribe(response => {
      this.chassis = [...response];
    }, err => {
      console.log(err);
    });

  }

  ionViewWillEnter() {
    this.loadingService.hide();
  }

  ionViewDidLeave() {
    if(this.subscriptionColors) {
      this.subscriptionColors.unsubscribe();
    }

    if(this.subscriptionAuction) {
      this.subscriptionAuction.unsubscribe();
    }

    if(this.subscriptionFuel) {
      this.subscriptionFuel.unsubscribe();
    }

    if(this.subscriptionCustomers) {
      this.subscriptionCustomers.unsubscribe();
    }

    if(this.subscriptionCategories) {
      this.subscriptionCategories.unsubscribe();
    }

    if(this.subscriptionBoardCondition) {
      this.subscriptionBoardCondition.unsubscribe();
    }

    if(this.subscriptionStates) {
      this.subscriptionStates.unsubscribe();
    }

    if(this.subscriptionEngineers) {
      this.subscriptionEngineers.unsubscribe();
    }

    if(this.subscriptionChassis) {
      this.subscriptionChassis.unsubscribe();
    }

  }

  back() {
    switch(this.inspect) {
      case 'caveat': {
        this.inspect = 'vehicle';
        break;
      }
      case 'conditions': {
        this.inspect = 'caveat';
        break;
      }
      case 'equipment': {
        this.inspect = 'conditions';
        break;
      }
      case 'pictures': {
        this.inspect = 'equipment';
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
        this.inspect = 'conditions';
        break;
      }
      case 'conditions': {
        this.inspect = 'equipment';
        break;
      }
      case 'equipment': {
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

  getKeys(keys) {
    return Object.keys(keys);
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
