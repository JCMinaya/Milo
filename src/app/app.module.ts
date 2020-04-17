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
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './dashboard/product/product.component';
import { HomeComponent } from './dashboard/home/home.component';
import { OrderComponent } from './dashboard/order/order.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { ProductListComponent } from './dashboard/product/product-list/product-list.component';
import { CustomerListComponent } from './dashboard/customer/customer-list/customer-list.component';
import { OrderListComponent } from './dashboard/order/order-list/order-list.component';
import { ProductService } from './dashboard/product/product.service';
import { CustomerService } from './dashboard/customer/customer.service';
import { OrderService } from './dashboard/order/order.service';
import { ConfirmDeleteDialog } from './dashboard/confirm-delete.component';
import { ProductDialog } from './dashboard/product/product-dialog.component';
import { CustomerDialog } from './dashboard/customer/customer-dialog.component';
import { OrderDialog } from './dashboard/order/order-dialog.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';


const appRoutes : Routes = [
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  {
    path: "dashboard",  component: DashboardComponent,
    canActivate: [LoggedInGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'orders', component: OrderComponent},
      {path: 'products', component: ProductComponent},
      {path: 'customers', component: CustomerComponent},
      {path: '**', component: HomeComponent }
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
    CustomerListComponent,
    OrderListComponent,
    DashboardComponent,
    ConfirmDeleteDialog,
    ProductDialog,
    CustomerDialog,
    OrderDialog
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
    AuthModule,
    ChartsModule
  ],
  providers: [ProductService, CustomerService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
