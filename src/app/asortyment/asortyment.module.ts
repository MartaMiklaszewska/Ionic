import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsortymentPageRoutingModule } from './asortyment-routing.module';

import { AsortymentPage } from './asortyment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsortymentPageRoutingModule
  ],
  declarations: [AsortymentPage]
})
export class AsortymentPageModule {}
