import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL: String;
  constructor(private http: HttpClient) { 
    this.apiURL = environment.apiURL;
  }     

  onCreateCustomer(customer:Customer){
    return this.http.post<Customer[]>(this.apiURL + "customers", customer);
  }

  onGetAllCustomer(){
    return this.http.get<Customer[]>(this.apiURL + "customers");
  }
}
