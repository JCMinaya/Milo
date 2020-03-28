import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

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

  productList: MatTableDataSource<Product>;
  displayedColumns = ['nombre', 'marca', 'codigo', 'itbis', 'ubicacion'];
  expandedElement: Product | null;

  constructor(private productService:ProductService) { }  

  ngOnInit() {
    this.productService.products.subscribe(products => {
      this.productList = new MatTableDataSource(products);
      this.productList.filterPredicate = (data: Product, filter: string): boolean => {
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
          return (currentTerm + (data as { [key: string]: any })[key] + '◬');
         }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
         
         const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
         
         return dataStr.indexOf(transformedFilter) != -1;
       }
    })
    this.productService.loadAll();
  }
  
  applySearchFilter(filterValue:string){
    this.productList.filter = filterValue.trim().toLowerCase();
  }
  
  // getAllProducts() {
  //   this.productService.onGetAllProducts()
  //     .subscribe((resData) => {
  //       this.productList = new MatTableDataSource(resData)
  //       /*
  //       *   Code to remove all accents/diacritics to improve table filter.
  //       *   Applying the regex to the dataSource and the filter as well.
  //       */
  //      this.productList.filterPredicate = (data: Product, filter: string): boolean => {
  //        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
  //          return (currentTerm + (data as { [key: string]: any })[key] + '◬');
  //         }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          
  //         const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          
  //         return dataStr.indexOf(transformedFilter) != -1;
  //       }
  //     })
  //   }
}
