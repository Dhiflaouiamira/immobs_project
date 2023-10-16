import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyAqyJ1PjXeRjiem2QobvTryql5VU11ySOc",
  authDomain: "immob-2dd69.firebaseapp.com",
  projectId: "immob-2dd69",
  storageBucket: "immob-2dd69.appspot.com",
  messagingSenderId: "393610428212",
  appId: "1:393610428212:web:ecfbc24ef332d7d491af61",
  measurementId: "G-EY9S79BC41"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}
