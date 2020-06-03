import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MniejIstotnePageRoutingModule } from './mniej-istotne-routing.module';

import { MniejIstotnePage } from './mniej-istotne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MniejIstotnePageRoutingModule
  ],
  declarations: [MniejIstotnePage]
})
export class MniejIstotnePageModule {}
