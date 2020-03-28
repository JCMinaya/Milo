import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL: String;
  constructor(private http: HttpClient) { 
    this.apiURL = environment.apiURL;
  }     

  onCreateProduct(product:Product){
    return this.http.post<Product>(this.apiURL + "products", product);
  }

  onGetAllProducts(){
    return this.http.get<Product[]>(this.apiURL + "products");
  }
}
