import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

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

const appRoutes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'products', component: ProductComponent},
  {path: 'customers', component: CustomerComponent}
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
    ProductCreateComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
