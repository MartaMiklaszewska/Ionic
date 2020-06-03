import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsortymentPage } from './asortyment.page';

const routes: Routes = [
  {
    path: '',
    component: AsortymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsortymentPageRoutingModule {}
