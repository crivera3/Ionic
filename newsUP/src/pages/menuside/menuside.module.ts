import { NgModule, ViewChild, Component } from '@angular/core';
import { IonicPageModule, Nav,Platform } from 'ionic-angular';
import { MenusidePage } from './menuside';

import { HomePage } from '../home/home';
import { EstadisticoPage } from '../estadistico/estadistico';

@NgModule({
  declarations: [
    MenusidePage,
  ],
  imports: [
    IonicPageModule.forChild(MenusidePage),
  ],
})
export class MenusidePageModule {
  @ViewChild(Nav) nav: Nav;

}
