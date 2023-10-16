import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../authentication.service'; // Update this path
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-by-email',
  templateUrl: './get-by-email.page.html',
  styleUrls: ['./get-by-email.page.scss'],
})
export class GetByEmailPage implements OnInit {
  immobs!: Observable<any[]>;
  user: any;

  constructor(
    public firestore: AngularFirestore,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authService.getProfile().then((user) => {
      this.user = user;
      if (this.user) {
        const userEmail = this.user.email;
        this.immobs = this.firestore.collection('immobs', ref => ref.where('userEmail', '==', userEmail)).valueChanges();
      }
    }).catch(error => {
      console.log('Error getting user profile:', error);
    });
  }
}
