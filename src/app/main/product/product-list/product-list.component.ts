import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private productList: Product[] = []; 
  constructor(private productService:ProductService) { }  

  ngOnInit() {
    this.getAllProducts();
  }
  
  getAllProducts() {
    this.productService.onGetAllProducts()
      .subscribe(resData => {
        resData.forEach(product => {
          this.productList.push(product)
        })
      }
    )
    
  }

}
