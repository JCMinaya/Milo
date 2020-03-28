import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  constructor(private afService:AngularFireAuth, private authService:AuthService) { }
  
  ngOnInit() {
    this.user$ = this.afService.authState.pipe();
  }

  onSignOut(){
    this.authService.logout();
  }

}
