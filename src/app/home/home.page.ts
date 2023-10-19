import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ImmobService, Immob } from '../immmob-service.service';
import { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  immobSub!: Subscription;
  model: any = {};
  immobs: Immob[] = [];
  isOpen: boolean = false;

  constructor(public ngFireAuth: AngularFireAuth ,
    private immob: ImmobService,
    private router: Router,
    private authService:AuthenticationService
    ) {}

  ngOnInit(): void {
    this.immob.getImmobs();
    this.immobSub = this.immob.immobs.subscribe({
      next: (immobs) => {
        this.immobs = immobs;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.model = {};
    this.isOpen = false;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async save(form: NgForm) {
    try {
      if (!form.valid) {
        // alert
        return;
      }
      console.log(form.value);
      if (this.model?.id) await this.immob.updateImmob(this.model.id, form.value);
      else await this.immob.addImmob(form.value);
      this.modal.dismiss();
    } catch (e) {
      console.log(e);
    }
  }

  async deleteImmob(immob: Immob) {
    try {
      await this.immob.deleteImmob(immob?.id!);
    } catch (e) {
      console.log(e);
    }
  }

  async editImmob(immob: Immob) {
    try {
      this.isOpen = true;
      this.model = { ...immob };
      // const data: Immob = await this.immob.getImmobById(immob?.id!);
      // console.log('data: ', data);
      // this.model = { ...data };
    } catch (e) {
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    if (this.immobSub) this.immobSub.unsubscribe();
  }

  
    openDetails(id: string) {
      this.router.navigate(['/details', id]);
    }

    async signOut() {
      try {
        await this.authService.signOut();
        console.log('User signed out successfully.');
        this.router.navigate(['/landing']);
      } catch (error) {
        console.error('Error in signing out:', error);
       
      }
    }
  }
  

