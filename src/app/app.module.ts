import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

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
import { LoggedInGuard } from 'ngx-auth-firebaseui';


const appRoutes : Routes = [
  {
  path: "",  
  canActivate: [LoggedInGuard],
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'orders', component: OrderComponent},
    { path: 'products', component: ProductComponent,
      children: [
        {
          path: '',
          children: [
            { path: 'create', component: ProductCreateComponent },
            { path: 'list', component: ProductListComponent }
          ]
        }]
    },
    {path: 'customers', component: CustomerComponent}
  ]
}]

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
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AuthModule
  ],
  providers: [ProductService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
