import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth) {}

  async registerUser(email: string, password: string, name: string) {
    try {
      return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      // Handle error appropriately
      console.error('Error in registration:', error);
      throw error;
    }
  }

  async loginUser(email: string, password: string) {
    try {
      return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      // Handle error appropriately
      console.error('Error in login:', error);
      throw error;
    }
  }

  async resetPassword(email: string) {
    try {
      return await this.ngFireAuth.sendPasswordResetEmail(email);
    } catch (error) {
      // Handle error appropriately
      console.error('Error in resetting password:', error);
      throw error;
    }
  }

  async getProfile() {
    try {
      return await this.ngFireAuth.currentUser;
    } catch (error) {
      // Handle error appropriately
      console.error('Error in getting user profile:', error);
      throw error;
    }
  }


  async signOut(){
    return await this.ngFireAuth.signOut();
   }


  async signInWithPhoneNumber(phoneNumber: string) {
    try {
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      const confirmationResult = await this.ngFireAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
      const verificationCode = window.prompt(phoneNumber + 'Enter the verification code');

      if (verificationCode) {
        const userCredential = await confirmationResult.confirm(verificationCode);
        // User is now signed in
        console.log(userCredential.user);
      }
    } catch (error) {
      // Handle error appropriately
      console.error('Error in signing in with phone number:', error);
      throw error;
    }
  }
}
