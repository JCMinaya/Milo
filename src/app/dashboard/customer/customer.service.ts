import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL: String;
  private _customers = new BehaviorSubject<Customer[]>([]);
  private dataStore: { customers: Customer[] } = { customers: [] };
  readonly customers = this._customers.asObservable();

  constructor(private http: HttpClient) { 
    this.apiURL = environment.apiURL;
  }     
  
  loadAll(){
    this.http.get<Customer[]>(this.apiURL + "customers")
    .subscribe((customers) => {
      this.dataStore.customers = customers;
      this._customers.next(Object.assign({}, this.dataStore).customers);
    },
      error => console.log("Could not load Customers."+ error)
    );
  }

  create(customer: Customer) {
    this.http
      .post<Customer>(`${this.apiURL}customer`, customer)
      .subscribe(
        data => {
          console.log("hola");
          this.dataStore.customers.push(customer);
          this._customers.next(Object.assign({}, this.dataStore).customers);
        },
        error => console.log('Could not create customer.')
      );
  }

  update(customer: Customer) {
    this.http
      .put<Customer>(`${this.apiURL}customers/${customer.id}`, customer)
      .subscribe(
        (data) => {
          this.dataStore.customers.forEach((t, i) => {
            if (t.id === customer.id) {
              this.dataStore.customers[i] = customer;
            }
          });

          this._customers.next(Object.assign({}, this.dataStore).customers);
        },
        error => console.log('Could not update customer.' + error.data)
      );
  }

  remove(customerId: number) {
    this.http.delete(`${this.apiURL}customers/${customerId}`).subscribe(
      response => {
        this.dataStore.customers.forEach((t, i) => {
          if (t.id === customerId) {
            this.dataStore.customers.splice(i, 1);
          }
        });

        this._customers.next(Object.assign({}, this.dataStore).customers);
      },
      error => console.log('Could not delete customer.')
    );
  }

  onCreateCustomer(customer:Customer){
    return this.http.post<Customer[]>(this.apiURL + "customers", customer);
  }

  onGetAllCustomer(){
    return this.http.get<Customer[]>(this.apiURL + "customers");
  }
}
