import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MenuserviceProvider} from '../providers/menuservice/menuservice';
import {MvtoresumenProvider} from '../providers/mvtoresumen/mvtoresumen';
import {ParametrosProvider} from '../providers/parametros/parametros';
import { HomePage } from '../pages/home/home';
import { MenusidePage } from '../pages/menuside/menuside';
import { EstadisticoPage } from '../pages/estadistico/estadistico';
import { LoguinPage } from '../pages/loguin/loguin';
import { Observable } from 'rxjs/Observable'; 
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any = LoguinPage;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any, icon: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      this.pages=[
        {title: 'Home', component:HomePage, icon: 'home'},
        {title: 'Estadistico', component:EstadisticoPage, icon: 'gs'},
      ];

    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}

