import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {

  pushPage: any;
  login: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.pushPage = InicioPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

  enviar(campoLogin, campoSenha) {
    this.login = campoLogin;
    this.senha = campoSenha;
    this.mensagem = 'Seus dados foram enviados!';

    if (campoLogin == 'Lucas' && campoSenha == '123') {
      this.navCtrl.push(InicioPage);
    }
    else {
      let prompt = this.alertCtrl.create({
        title: 'Atenção!',
        message: "Usuário ou senha inválidos!!!, Verifique por favor e redigite",


        buttons: [
          {
            text: 'Entendi',
            handler: data => {
            }
          },
        ]
      });
      prompt.present();
    }

  }
}

