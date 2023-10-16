import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImmobPageRoutingModule } from './add-immob-routing.module';

import { AddImmobPage } from './add-immob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddImmobPageRoutingModule
  ],
  declarations: [AddImmobPage]
})
export class AddImmobPageModule {}
