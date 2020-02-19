import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { environment } from '../environments/environment';
import { ProductComponent } from './main/product/product.component';
import { HomeComponent } from './main/home/home.component';
import { OrderComponent } from './main/order/order.component';
import { CustomerComponent } from './main/customer/customer.component';
import { ProductListComponent } from './main/product/product-list/product-list.component';
import { ProductService } from './main/product/product.service';
import { ProductCreateComponent } from './main/product/product-create/product-create.component';
import { CustomerListComponent } from './main/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './main/customer/customer-create/customer-create.component';
import { CustomerService } from './main/customer/customer.service';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'products', component: ProductComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductComponent,
    HomeComponent,
    OrderComponent,
    CustomerComponent,
    ProductListComponent,
    ProductCreateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    JwPaginationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyAMkIJxLURgGABsijrSEfByJ6TbZ5bWuJE",
      authDomain: "milo-fa1b1.firebaseapp.com",
      databaseURL: "https://milo-fa1b1.firebaseio.com",
      projectId: "milo-fa1b1",
      storageBucket: "milo-fa1b1.appspot.com",
      messagingSenderId: "524479414175"
    })
  ],
  providers: [ProductService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
