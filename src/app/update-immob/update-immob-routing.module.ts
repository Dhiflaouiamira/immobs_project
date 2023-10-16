import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateImmobPage } from './update-immob.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateImmobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateImmobPageRoutingModule {}
