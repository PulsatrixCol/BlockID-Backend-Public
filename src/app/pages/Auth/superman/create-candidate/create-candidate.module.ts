import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCandidatePageRoutingModule } from './create-candidate-routing.module';

import { CreateCandidatePage } from './create-candidate.page';
import { ComponentesModule } from '../../../../componentes/componentes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCandidatePageRoutingModule,
    ComponentesModule
  ],
  declarations: [CreateCandidatePage]
})
export class CreateCandidatePageModule {}
