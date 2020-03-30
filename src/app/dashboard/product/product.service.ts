import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL: String;
  private _products = new BehaviorSubject<Product[]>([]);
  private dataStore: { products: Product[] } = { products: [] };
  readonly products = this._products.asObservable();
  // productList: MatTableDataSource<Product>;

  constructor(private http: HttpClient) { 
    this.apiURL = environment.apiURL;
  }

  loadAll(){
    this.http.get<Product[]>(this.apiURL + "products")
    .subscribe((products) => {
      this.dataStore.products = products;
      this._products.next(Object.assign({}, this.dataStore).products);
    },
      error => console.log("Could not load Products."+ error)
    );
  }

  create(product: Product) {
    this.http
      .post<Product>(this.apiURL + "product", product)
      .subscribe(
        data => {
          this.dataStore.products.push(product);
          this._products.next(Object.assign({}, this.dataStore).products);          
        },
        error => console.log('Could not create product.')
      );
  }

  update(product: Product) {
    this.http
      .put<Product>(`${this.apiURL}products/${product.id}`, product)
      .subscribe(
        (data) => {
          this.dataStore.products.forEach((t, i) => {
            if (t.id === product.id) {
              this.dataStore.products[i] = product;
            }
          });

          this._products.next(Object.assign({}, this.dataStore).products);
        },
        error => console.log('Could not update product.' + error.data)
      );
  }

  remove(productId: string) {
    this.http.delete(`${this.apiURL}products/${productId}`).subscribe(
      response => {
        this.dataStore.products.forEach((t, i) => {
          if (t.id === productId) {
            this.dataStore.products.splice(i, 1);
          }
        });

        this._products.next(Object.assign({}, this.dataStore).products);
      },
      error => console.log('Could not delete product.')
    );
  }
}
