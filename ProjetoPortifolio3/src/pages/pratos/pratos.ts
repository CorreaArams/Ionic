import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the PratosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pratos',
  templateUrl: 'pratos.html',
})
export class PratosPage {

  constructor(public alertCtrl: AlertController
    ) {
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PratosPage');
  }

  rucula() {
    let alert = this.alertCtrl.create({
      
      title: 'Salada de Rúcula',
      subTitle: 'rucula,tomate, palmito e cebola. <br> <br> R$31,90',
      message: `<img src="/assets/rucula.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 31,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  capresi() {
    let alert = this.alertCtrl.create({
      
      title: 'Salada Capresi',
      subTitle: 'tomate, mussarela de buffala, manjericão e parmesão ralado. <br> <br> R$29,90',
      message: `<img src="/assets/capresi.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 29,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  salmao() {
    let alert = this.alertCtrl.create({
      
      title: 'Salmao com aspargos',
      subTitle: 'Salmao com aspargos, arroz a grega e molho tártaro. <br> <br> R$45,90',
      message: `<img src="/assets/salmao.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 45,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  parmegiana() {
    let alert = this.alertCtrl.create({
      
      title: 'Filé mignon à parmegiana',
      subTitle: 'Filé mignon parmegiana, arroz e fritas. <br> <br> R$69,90',
      message: `<img src="/assets/parmegiana.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 69,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  strogonoff() {
    let alert = this.alertCtrl.create({
      
      title: 'Strogonoff de Frango',
      subTitle: 'Strogonoff de frango, arroz e batata palha. <br> <br> R$49,90',
      message: `<img src="/assets/strogonoff.jpg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 49,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  vegano() {
    let alert = this.alertCtrl.create({
      
      title: 'Strogonoff Vegetariano',
      subTitle: 'Palmito,abobrinha, tomate,arroz e batata palha. <br> <br> R$39,90',
      message: `<img src="/assets/vegano.jpeg" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 39,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }


}
