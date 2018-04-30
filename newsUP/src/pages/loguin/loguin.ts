import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,MenuController } from 'ionic-angular';
import { Form } from 'ionic-angular/util/form';
import {MusuarioProvider} from '../../providers/musuario/musuario';
import {HomePage} from '../../pages/home/home';

/**
 * Generated class for the LoguinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loguin',
  templateUrl: 'loguin.html',
})
export class LoguinPage {
  activeMenu: string;
  @ViewChild(Nav) nav: Nav;
  userArray;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public user: MusuarioProvider, public menu: MenuController) {
                this.userArray=[];
                this.menu.enable(false);
  }
  logueo(user,pass){
    var URL=this.user.Login(user,pass)
        .subscribe( user2 => {
          user2.map( idM_usuario => {
                this.userArray.push(idM_usuario);
            });
            if(this.userArray[0]['idM_usuario'] != ""){
              this.navCtrl.setRoot(HomePage);
            }else{
              alert();
            }
          });
  }
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad LoguinPage');
  //}

}
