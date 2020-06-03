import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamowionePage } from './zamowione.page';

const routes: Routes = [
  {
    path: '',
    component: ZamowionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamowionePageRoutingModule {}
