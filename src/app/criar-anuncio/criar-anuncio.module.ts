import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarAnuncioPageRoutingModule } from './criar-anuncio-routing.module';

import { CriarAnuncioPage } from './criar-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarAnuncioPageRoutingModule
  ],
  declarations: [CriarAnuncioPage]
})
export class CriarAnuncioPageModule {}
