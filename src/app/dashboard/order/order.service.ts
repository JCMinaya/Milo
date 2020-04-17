import { Injectable } from '@angular/core';
import { Order } from './order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiURL: String;
  private _orders = new BehaviorSubject<Order[]>([]);
  private dataStore: { orders: Order[] } = { orders: [] };
  readonly orders = this._orders.asObservable();

  constructor(private http: HttpClient) { 
    this.apiURL = environment.apiURL;
  }     
  
  loadAll(){    
    this.http.get<Order[]>(this.apiURL + "orders")
    .subscribe((orders) => {
      this.dataStore.orders = orders;
      this._orders.next(Object.assign({}, this.dataStore).orders);
    },
      error => console.log("Could not load Orders."+ error)
    );
  }

  create(order: Order) {
    this.http
      .post<Order>(`${this.apiURL}order`, order)
      .subscribe(
        data => {
          console.log("hola");
          this.dataStore.orders.push(order);
          this._orders.next(Object.assign({}, this.dataStore).orders);
        },
        error => console.log('Could not create order.')
      );
  }

  update(order: Order) {
    this.http
      .put<Order>(`${this.apiURL}orders/${order.documento}`, order)
      .subscribe(
        (data) => {
          this.dataStore.orders.forEach((t, i) => {
            if (t.documento === order.documento) {
              this.dataStore.orders[i] = order;
            }
          });

          this._orders.next(Object.assign({}, this.dataStore).orders);
        },
        error => console.log('Could not update order.' + error.data)
      );
  }

  remove(orderId: string) {
    this.http.delete(`${this.apiURL}orders/${orderId}`).subscribe(
      response => {
        this.dataStore.orders.forEach((t, i) => {
          if (t.documento === orderId) {
            this.dataStore.orders.splice(i, 1);
          }
        });

        this._orders.next(Object.assign({}, this.dataStore).orders);
      },
      error => console.log('Could not delete order.')
    );
  }
}
