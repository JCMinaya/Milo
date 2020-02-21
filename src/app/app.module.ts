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
import { ProductComponent } from './dashboard/product/product.component';
import { HomeComponent } from './dashboard/home/home.component';
import { OrderComponent } from './dashboard/order/order.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { ProductListComponent } from './dashboard/product/product-list/product-list.component';
import { ProductService } from './dashboard/product/product.service';
import { ProductCreateComponent } from './dashboard/product/product-create/product-create.component';
import { CustomerListComponent } from './dashboard/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './dashboard/customer/customer-create/customer-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerService } from './dashboard/customer/customer.service';
import { LoggedInGuard } from 'ngx-auth-firebaseui';


const appRoutes : Routes = [
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  {
    path: "dashboard",  component: DashboardComponent,
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
      {path: 'customers', component: CustomerComponent},
      { path: '**', component: HomeComponent }
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
    CustomerCreateComponent,
    DashboardComponent
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
