import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateImmobPageRoutingModule } from './update-immob-routing.module';

import { UpdateImmobPage } from './update-immob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateImmobPageRoutingModule
  ],
  declarations: [UpdateImmobPage]
})
export class UpdateImmobPageModule {}
