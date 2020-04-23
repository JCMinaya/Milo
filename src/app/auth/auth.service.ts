import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private afAuth:AngularFireAuth) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['auth']);
  }

  async logout(){
    await this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
   })
    this.router.navigate(['auth']);
  }
}
