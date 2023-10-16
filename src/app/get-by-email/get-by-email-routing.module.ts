import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetByEmailPage } from './get-by-email.page';

const routes: Routes = [
  {
    path: '',
    component: GetByEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetByEmailPageRoutingModule {}
