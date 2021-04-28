import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the BebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  constructor(public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BebidasPage');
  }

  agua() {
    let alert = this.alertCtrl.create({
      
      title: 'Agua Mineral',
      subTitle: '300ml(com ou sem gás) <br> <br> R$3,90',
      message: `<img src="/assets/agua.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 3,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  suco() {
    let alert = this.alertCtrl.create({
      
      title: 'Sucos de fruta',
      subTitle: '350 ml, sabores laranja, maracujá, abacaxi, abacaxi com hortelão e melancia. <br> <br> R$5,90',
      message: `<img src="/assets/suco.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 5,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  lata() {
    let alert = this.alertCtrl.create({
      
      title: 'Coca cola lata',
      subTitle: '350 ml. <br> <br> R$4,90',
      message: `<img src="/assets/lata.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 4,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  garrafa() {
    let alert = this.alertCtrl.create({
      
      title: 'Coca cola garrafa',
      subTitle: '2 Litros. <br> <br> R$9,90',
      message: `<img src="/assets/garrafa.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 9,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  cerveja() {
    let alert = this.alertCtrl.create({
      
      title: 'Cerveja Skoll garrafa',
      subTitle: '1.5 litros. <br> <br> R$11,90',
      message: `<img src="/assets/cerveja.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 11,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }


}
