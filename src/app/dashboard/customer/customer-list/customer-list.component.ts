import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { MatTableDataSource } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CustomerListComponent implements OnInit {

  customerList: MatTableDataSource<Customer>; 
  displayedColumns:String[] = ['nombre', 'rnc', 'tipo', 'correo', 'telefonoFijo'];
  expandedElement: Customer | null;
  items = [];
  pageOfItems: Array<any>;
  proveedorFilterActive = false;

  constructor(private customerService:CustomerService) { }  

  ngOnInit() {
    this.customerService.onGetAllCustomer()
    .subscribe(resData => {
        this.customerList = new MatTableDataSource(resData)

        /*
        *   Code to remove all accents/diacritics to improve table filter.
        *   Applying the regex to the dataSource and the filter as well.
        */
      this.customerList.filterPredicate = (data: Customer, filter: string): boolean => {
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
          return (currentTerm + (data as { [key: string]: any })[key] + '◬');
        }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        return dataStr.indexOf(transformedFilter) != -1;
      }
    })
  }

  proveedorFilterOnChange(){
    this.proveedorFilterActive = !this.proveedorFilterActive;
    this.customerList.filter
  }

  applySearchFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.customerList.filter = filterValue.trim().toLowerCase();
  }
  
  onChangePage(pageOfItems: Array<any>){
    this.pageOfItems = pageOfItems;
  }

}
