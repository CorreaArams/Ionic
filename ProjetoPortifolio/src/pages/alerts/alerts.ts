import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  user: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  mostrarAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Cadastro',
      message: "Preencha os dados abaixo:",
      inputs: [
        {
          name: 'email',
          placeholder: 'Seu Email aqui'
        },
        {
          name: 'telefone',
          placeholder: 'Seu Telefone Aqui'
        },
      ],
      
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.user = 'Dados cadastrados com sucesso, Email: ' + data.email + ', Telefone: ' + data.telefone + '  .';
           
          }
        }
      ]
    });
    prompt.present();
  }

}
