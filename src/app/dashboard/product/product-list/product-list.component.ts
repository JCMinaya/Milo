import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  columnsToDisplay = ['nombre', 'marca', 'codigo', 'itbis', 'ubicacion'];
  expandedElement: Product | null;

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
