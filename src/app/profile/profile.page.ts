import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ImmobService,Immob } from '../immmob-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any; // Define the user object
  immobs: Immob[] = []; // Initialize the array of immobs

  constructor(
    private authService: AuthenticationService,
    private immobService: ImmobService
  ) { }

  async ngOnInit() {
    try {
      this.user = await this.authService.getProfile();
      if (this.user) {
        this.immobs = await this.immobService.getImmobsByUserId(this.user.uid);
      }
    } catch (error) {
      console.error('Error fetching user profile or immobs:', error);
    }
  }
}
