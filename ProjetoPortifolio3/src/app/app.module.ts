import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LanchesPage } from '../pages/lanches/lanches';
import { PratosPage } from '../pages/pratos/pratos';
import { SobremesaPage } from '../pages/sobremesa/sobremesa';
import { BebidasPage } from '../pages/bebidas/bebidas';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanchesPage,
    PratosPage,
    SobremesaPage,
    BebidasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanchesPage,
    PratosPage,
    SobremesaPage,
    BebidasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
