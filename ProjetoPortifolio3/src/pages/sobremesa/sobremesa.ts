import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the SobremesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobremesa',
  templateUrl: 'sobremesa.html',
})
export class SobremesaPage {

  constructor(public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobremesaPage');
  }

  casquinha() {
    let alert = this.alertCtrl.create({
      
      title: 'Sorvete Casquinha',
      subTitle: '1 Bola, sabores creme, chocolate, maracujá e morango <br> <br> R$3,90',
      message: `<img src="/assets/casquinha.jpg" width="1000">`,
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

  cascao() {
    let alert = this.alertCtrl.create({
      
      title: 'Sorvete Cascão',
      subTitle: '2 Bolas, sabores creme, chocolate, maracujá e morango. <br> <br> R$6,90',
      message: `<img src="/assets/cascao.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 6,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  mousse() {
    let alert = this.alertCtrl.create({
      
      title: 'Mousse',
      subTitle: 'mousse chocolate ou maracujá <br> <br> R$8,90',
      message: `<img src="/assets/mousse.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 8,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  petit() {
    let alert = this.alertCtrl.create({
      
      title: 'Petit Gateau',
      subTitle: '1 bola de sorvete de creme e um bolinho de chocolate quente com calda quente de chocolate. <br> <br> R$11,90',
      message: `<img src="/assets/petit.png" width="1000">`,
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

  torta() {
    let alert = this.alertCtrl.create({
      
      title: 'Torta holandesa',
      subTitle: '1 fatia. <br> <br> R$11,90',
      message: `<img src="/assets/torta.png" width="1000">`,
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
