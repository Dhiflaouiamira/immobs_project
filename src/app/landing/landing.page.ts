import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage  {
  immobs!: Observable<any[]>;
  ImmobData = {
    Name: '',
    description: '',
    image: '',
    localisation: '',
    nb_pieces: '',
    price: ''
  };

  constructor(
    public firestore: AngularFirestore,
    public authService: AuthenticationService,
    private router: Router
  ) {
    this.immobs = this.firestore.collection('immobs').valueChanges();
  }

  addImmob() {
    this.firestore.collection('immobs').add(this.ImmobData);
    this.ImmobData = {
      Name: '',
      description: '',
      image: '',
      localisation: '',
      nb_pieces: '',
      price: ''
    };
  }

}
