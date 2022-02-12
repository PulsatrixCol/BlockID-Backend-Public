import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupermanPageRoutingModule } from './superman-routing.module';

import { SupermanPage } from './superman.page';
import { ComponentesModule } from '../../../componentes/componentes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupermanPageRoutingModule,
    ComponentesModule
  ],
  declarations: [SupermanPage]
})
export class SupermanPageModule {}
