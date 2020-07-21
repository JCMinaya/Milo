import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { MatDialog } from '@angular/material';
import { CustomerDialog } from './customer-dialog.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  checkBoxProveedor = false;
  constructor(private customerService:CustomerService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onCreateCustomer(){
    const dialogRef = this.dialog.open(CustomerDialog, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == null) return;
      console.log(result);
      // result.id = Math.floor((Math.random() * 10000000) + 1).toString();
      // result.itbis = result.itbis ? "18%": "";
      this.customerService.create(result);
    })
  }

}
