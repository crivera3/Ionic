import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EstadisticoPage} from '../pages/estadistico/estadistico';
import { MenuserviceProvider } from '../providers/menuservice/menuservice';
import {LoguinPage} from '../pages/loguin/loguin';
import {MenusidePage} from '../pages/menuside/menuside';
import { HttpClientModule } from '@angular/common/http';
import { MvtoresumenProvider } from '../providers/mvtoresumen/mvtoresumen';
import { ParametrosProvider } from '../providers/parametros/parametros';
import { MusuarioProvider } from '../providers/musuario/musuario';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EstadisticoPage,
    MenusidePage,
    LoguinPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EstadisticoPage,
    MenusidePage,
    LoguinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuserviceProvider,
    MvtoresumenProvider,
    ParametrosProvider,
    MusuarioProvider
  ]
})
export class AppModule {}
