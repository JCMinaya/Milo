import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxAuthFirebaseUIModule,LoggedInGuard  } from 'ngx-auth-firebaseui';
import { MaterialModule } from '../material.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authRoutes : Routes = [
  { path: 'auth', 
    component: AuthComponent,
    // canActivate: [LoggedInGuard],
    children: [
      { path: '', component: LoginComponent, outlet: 'auth' },
      { path: 'register', component: RegisterComponent, outlet: 'auth' }
    ]
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent
  ],
  providers: [LoggedInGuard],
  imports: [
    CommonModule,
    MaterialModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyAMkIJxLURgGABsijrSEfByJ6TbZ5bWuJE",
      authDomain: "milo-fa1b1.firebaseapp.com",
      databaseURL: "https://milo-fa1b1.firebaseio.com",
      projectId: "milo-fa1b1",
      storageBucket: "milo-fa1b1.appspot.com",
      messagingSenderId: "524479414175"
    },
    () => "appFactoryName",
    {
      authGuardFallbackURL: 'auth',
      authGuardLoggedInURL: 'dashboard/home'
    }),
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    AuthComponent
  ]
})
export class AuthModule { }
