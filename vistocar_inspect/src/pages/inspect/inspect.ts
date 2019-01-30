import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  auctions: Array<Object>;
  boardCondition: Array<Object>;
  caveat: Array<Object>;
  caveatChecked: Array<Object> = [];
  caveatDefault: Array<Object> = [];
  chassis: Array<Object>;
  colors: Array<Object>;
  conditions: Array<Object>;
  conditionsChecked: Array<Object> = [];
  customers: Array<Object>;
  engineers: Array<Object>;
  equipment: Array<Object>;
  equipmentChecked: Array<Object> = [];
  exchanges: Array<Object>;
  fuels: Array<Object>;
  vehicleCategories: Array<Object>;
  states: Object = {};

  subscriptionAuction: Subscription;
  subscriptionBoardCondition: Subscription;
  subscriptionChassis: Subscription;
  subscriptionCategories: Subscription;
  subscriptionCategoriesFilter: Subscription;
  subscriptionColors: Subscription;
  subscriptionEngineers: Subscription;
  subscriptionExchanges: Subscription;
  subscriptionCustomers: Subscription;
  subscriptionFuel: Subscription;
  subscriptionStates: Subscription;

  inspectData = {
    customer: '',
    auction: '',
    TaxId: '', // VER DEPOIS
    lotnumber: undefined ,
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
    exchangenumbercondition: '',
    renavamnumber: undefined,
    kitgnv: false,
    vehiclebrand: '',
    brachid: 0, // VER DEPOIS
    branch: 'not use', // VER DEPOIS
    vehiclemodel: '',
    yearmodel: undefined,
    yearfabrication: undefined,
    color: '',
    fluel: '',
    observation: '',
    caveat: this.caveatDefault,
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
              private alertCtrl: AlertController,
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

    this.subscriptionCategoriesFilter = this.inspectService.getAccessories().subscribe(response => {
      if (response) {
        this.caveat = response.filter(e => e.aba === 'Ressalva');
        this.equipment = response.filter(e => e.aba === 'Equipamentos');
        this.conditions = response.filter(e => e.aba === 'Condições');

        console.log('tem value? ', this.caveat, this.equipment, this.conditions);
      }
    })

    this.subscriptionFuel = this.inspectService.getFuel().subscribe(response => {
      this.fuels = [...response];
    }, err => {
      console.log(err);
    });

    this.subscriptionExchanges = this.inspectService.getExchanges().subscribe(response => {
      this.exchanges = [...response];
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
        this.setCaveat();
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

  changeCheckboxStatus(item, event) {

    const name = item.nome;

    if (item.aba === 'Ressalva' && event.checked) {
      this.caveatChecked.push(item);
    } else if (item.aba === 'Ressalva' && !event.checked) {
      this.caveatChecked = this.caveatChecked.filter(e => e['nome'] !== name);
    }

    if (item.aba === 'Condições' && event.checked) {
      this.conditionsChecked.push(item);
    } else if (item.aba === 'Condições' && !event.checked) {
      this.conditionsChecked = this.conditionsChecked.filter(e => e['nome'] !== name);
    }

    if (item.aba === 'Equipamentos' && event.checked) {
      this.equipmentChecked.push(item);
    } else if (item.aba === 'Equipamentos' && !event.checked) {
      this.equipmentChecked = this.equipmentChecked.filter(e => e['nome'] !== name);
    }

    console.log('items: ', this.equipmentChecked, this.caveatChecked, this.conditionsChecked);
  }


  setCaveat() {

    const caveat = this.caveatChecked.map(e => ({id: e['id'], name: e['nome'], use: true}));
    const equipments = this.equipmentChecked.map(e => ({id: e['id'], name: e['nome'], use: true}));
    const conditions = this.conditionsChecked.map(e => ({id: e['id'], name: e['nome'], use: true}));

    this.caveatDefault = caveat.concat(equipments).concat(conditions);
    this.inspectData.caveat = this.caveatDefault;
  }

  save() {
    this.inspectData.renavamnumber = Number(this.inspectData.renavamnumber);
    this.inspectData.lotnumber = Number(this.inspectData.lotnumber);
    this.inspectData.yearmodel = Number(this.inspectData.yearmodel);
    this.inspectData.yearfabrication = Number(this.inspectData.yearfabrication);
    console.log(JSON.stringify(this.inspectData));

    this.loadingService.show();

    this.inspectService.setReceiving(this.inspectData).subscribe(response => {
      console.log(response);
      let alert = this.alertCtrl.create({
        title: 'Inclusão de vistoria efetuada com sucesso.',
        subTitle: '',
        buttons: ['Fechar']
      });
      alert.present();
      this.loadingService.hide();

      this.navCtrl.push('home');
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Não foi possível efetuar a vistoria com os dados fornecidos.',
        subTitle: 'Por favor, verifique o processo de preenchimento dos dados.',
        buttons: ['Fechar']
      });
      alert.present();
      this.loadingService.hide();
    });
  }

}
