import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamowionePageRoutingModule } from './zamowione-routing.module';

import { ZamowionePage } from './zamowione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamowionePageRoutingModule
  ],
  declarations: [ZamowionePage]
})
export class ZamowionePageModule {}
