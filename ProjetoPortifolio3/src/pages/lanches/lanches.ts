import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';


/**
 * Generated class for the LanchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {

  constructor(public alertCtrl: AlertController
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

  xbacon() {
    let alert = this.alertCtrl.create({
      
      title: 'X Bacon',
      subTitle: 'Pao Bambini, Hamburguer 90g, Bacon, presunto,Queijo,alface e maionese caseira. <br> <br> R$18,90',
      message: `<img src="/assets/xbacon.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 18,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  xsalada() {
    let alert = this.alertCtrl.create({
      
      title: 'X Salada',
      subTitle: 'Pao Bambini, Hamburguer 90g,presunto,Queijo,alface,tomate e maionese caseira. <br> <br> R$15,90',
      message: `<img src="/assets/xsalada.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 15,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  xburguer() {
    let alert = this.alertCtrl.create({
      
      title: 'X Burguer',
      subTitle: 'Pao Bambini, Hamburguer 90g,presunto,Queijo e maionese caseira. <br> <br> R$13,90',
      message: `<img src="/assets/xburguer.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 13,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

  completo() {
    let alert = this.alertCtrl.create({
      
      title: 'Hot Dog Completo',
      subTitle: 'Pao Bambini, 2 salcichas, purê, mussarela, frango desfiado, calabresa, bacon, catupiry, vinagrete, milho verde e batata palha. <br> <br> R$26,00',
      message: `<img src="/assets/completo.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 26,00',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }
  tradicional() {
    let alert = this.alertCtrl.create({
      
      title: 'Hot Dog Tradicional',
      subTitle: 'Pao Bambini, 1 salcicha, purê, mussarela, vinagrete, milho verde, batata palha, ketchup e maionese caseira. <br> <br> R$17,90',
      message: `<img src="/assets/completo.png" width="1000">`,
      buttons: [{
        text:'Cancelar',
      cssClass: 'alertDanger'
        
    },
    {
      text:'Add: R$ 17,90',
      cssClass: 'alertDanger'

      }
  ]
    });
    alert.present();
  }

}
