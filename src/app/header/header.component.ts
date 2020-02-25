import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user: User;
  constructor(private afService:AngularFireAuth, private authService:AuthService) { 
    this.afService.authState.subscribe(user => {
      this.user = user;
    })
  }
   
  ngOnInit() {
  }

  onSignOut(){
    this.authService.logout();
  }

}
