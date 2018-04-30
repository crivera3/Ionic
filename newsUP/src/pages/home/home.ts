import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import {MenuserviceProvider} from '../../providers/menuservice/menuservice';
//
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  // definimos una variable que contenga nuestro objeto
  ObjectJson;

  constructor(public navCtrl: NavController, 
              public menu: MenuserviceProvider,
              public menuSide: MenuController) {

                this.menuSide.enable(true);
              }
  


}
