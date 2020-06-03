import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MniejIstotnePage } from './mniej-istotne.page';

const routes: Routes = [
  {
    path: '',
    component: MniejIstotnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MniejIstotnePageRoutingModule {}
