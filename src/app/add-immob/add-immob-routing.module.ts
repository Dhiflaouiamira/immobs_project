import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddImmobPage } from './add-immob.page';

const routes: Routes = [
  {
    path: '',
    component: AddImmobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddImmobPageRoutingModule {}
