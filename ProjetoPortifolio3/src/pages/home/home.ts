import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BebidasPage } from '../bebidas/bebidas';
import { LanchesPage } from '../lanches/lanches';
import { PratosPage } from '../pratos/pratos';
import { SobremesaPage } from '../sobremesa/sobremesa';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  pushPage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
    ) {
    
  }
  
  lanches() {
      this.pushPage = LanchesPage;
      this.navCtrl.push(LanchesPage);
    }
    pratos() {
      this.pushPage = PratosPage;
      this.navCtrl.push(PratosPage);
    }
    sobremesas() {
      this.pushPage = SobremesaPage;
      this.navCtrl.push(SobremesaPage);
    }
    bebidas() {
      this.pushPage = BebidasPage;
      this.navCtrl.push(BebidasPage);
    }


    presentAlert() {
      let alert = this.alertCtrl.create({
        
        title: 'Prato do Dia',
        subTitle: 'Apenas R$60,00 <br> Está incluso neste combo: <br> 01 Salada de rúcula <br> 01 Salmão com alcaparras <br> 01 Sorvete de casquinha',
        message: `<img src="/assets/combo.png" width="1000">`,
        buttons: [{
          text:'Cancelar',
        cssClass: 'alertDanger'
          
      },
      {
        text:'Add: R$ 60,00',
        cssClass: 'alertDanger'
  
        }
    ]
       
      });
      alert.present();
    }


}
