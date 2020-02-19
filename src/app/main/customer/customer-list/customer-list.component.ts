import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = []; 
  items = [];
  pageOfItems: Array<any>;

  constructor(private customerService:CustomerService) { }  

  ngOnInit() {
    this.getAllcustomers();
  }
  
  onChangePage(pageOfItems: Array<any>){
    this.pageOfItems = pageOfItems;
  }

  getAllcustomers() {
    this.customerService.onGetAllCustomer()
      .subscribe(resData => {
        resData.forEach(customer => {
          this.customerList.push(customer)
        })
      })
      console.log(this.customerList);
  }

}
