import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetByEmailPageRoutingModule } from './get-by-email-routing.module';

import { GetByEmailPage } from './get-by-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetByEmailPageRoutingModule
  ],
  declarations: [GetByEmailPage]
})
export class GetByEmailPageModule {}
