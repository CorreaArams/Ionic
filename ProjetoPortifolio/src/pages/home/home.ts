import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  params: Object;
  pushPage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  startToast() {
    let toast = this.toastCtrl.create({
      message:'Starting the show...',
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
  }
  friendToast() {
    let toast = this.toastCtrl.create({
      message:'Searching friends...',
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
  }
  volumeToast() {
    let toast = this.toastCtrl.create({
      message:'Putting Volume at the max...',
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
  }

  brightToast() {
    let toast = this.toastCtrl.create({
      message:'Let´s Shine like a diamond!!!',
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
  }

  engineToast() {
    let toast = this.toastCtrl.create({
      message:'And the best woman wins!!!',
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
  }


}
