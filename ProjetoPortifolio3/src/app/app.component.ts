import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {ViewChild} from '@angular/core';
import { LanchesPage } from '../pages/lanches/lanches';
import { PratosPage } from '../pages/pratos/pratos';
import { SobremesaPage } from '../pages/sobremesa/sobremesa';
import { BebidasPage } from '../pages/bebidas/bebidas';


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
      { title: 'Lanches', component: LanchesPage },
      { title: 'Pratos', component: PratosPage },
      { title: 'Sobremesa', component: SobremesaPage },
      { title: 'Bebidas', component: BebidasPage },
    ];
  }

  openPage(page: any): void {
    this.nav.push(page.component);

  }
}

