import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertsPage } from '../pages/alerts/alerts';
import { InputsPage } from '../pages/inputs/inputs';
import { HomePage } from '../pages/home/home';
import {ViewChild} from '@angular/core';
import { BadgesPage } from '../pages/badges/badges';
import { InicioPage } from '../pages/inicio/inicio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav : Nav;
 

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Dados', component: AlertsPage },
      { title: 'Login', component: InputsPage },
      { title: 'Inicio', component: InicioPage },
      { title: 'Amigos', component: BadgesPage },
    ];
  }

  openPage(page: any): void {
    this.nav.push(page.component);

  }
}

