import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalController, ToastController } from '@ionic/angular';
import { ImmobService,Immob } from '../immmob-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage  {
  immobs: Immob[] = [];
  model: any = {};
  constructor(private immob: ImmobService,private immobservice: ImmobService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  

  async deleteImmob(immob: Immob) {
    try {
      await this.immob.deleteImmob(immob?.id!);
    } catch (e) {
      console.log(e);
    }
  }

  async editImmob(immob: Immob) {
    try {
     
      this.model = { ...immob };
      // const data: Immob = await this.immob.getImmobById(immob?.id!);
      // console.log('data: ', data);
      // this.model = { ...data };
    } catch (e) {
      console.log(e);
    }
  }
  
}