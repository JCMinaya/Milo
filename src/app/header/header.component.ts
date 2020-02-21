import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  userName: string;
  constructor(private authService:AuthService) { 
    console.log(this.authService.user);
    
  }

  ngOnInit() {
    this.userName = this.authService.user.displayName;
  }

  onSignOut(){
    this.authService.logout();
  }

}
