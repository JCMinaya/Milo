import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxAuthFirebaseUIModule, LoggedInGuard } from 'ngx-auth-firebaseui';
import { MaterialModule } from '../material.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { environment } from 'src/environments/environment';

const authRoutes : Routes = [
  { path: 'auth', 
    component: AuthComponent,
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
    NgxAuthFirebaseUIModule.forRoot(environment.firebase,
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
