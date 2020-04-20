import { Component, OnInit, Input } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider;

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  onCreateAccountRequested(){
    this.router.navigateByUrl('/auth/(auth:register)');
  }

  onLoginSuccess(event){
    this.router.navigateByUrl('/dashboard/home');
    console.log(event);
    
  }

}
