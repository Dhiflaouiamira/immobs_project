import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service'; // Update this path
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
