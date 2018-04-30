import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadisticoPage } from './estadistico';

@NgModule({
  declarations: [
    EstadisticoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadisticoPage),
  ],
})
export class EstadisticoPageModule {}
