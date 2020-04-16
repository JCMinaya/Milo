import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDeleteDialog } from '../../confirm-delete.component';
import { CustomerDialog } from '../customer-dialog.component';

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
  displayedColumns:String[] = ['nombre', 'rnc', 'tipo', 'correo', 'Editar | Eliminar'];
  expandedElement: Customer | null;
  proveedorFilterActive = false;

  constructor(private customerService:CustomerService, public dialog: MatDialog) { }  

  ngOnInit() {
    this.customerService.customers.subscribe(customer => {
        this.customerList = new MatTableDataSource(customer)
      this.customerList.filterPredicate = (data: Customer, filter: string): boolean => {
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
          return (currentTerm + (data as { [key: string]: any })[key] + '◬');
        }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        return dataStr.indexOf(transformedFilter) != -1;
      }
    })
    this.customerService.loadAll();
  }

  onEditRow(customer: Customer){
    const dialogRef = this.dialog.open(CustomerDialog, {
      width: '550px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == null) return;
      this.customerService.update(result);
    })
  }

  onDeleteRow(customer: Customer){
    const dialogRef = this.dialog.open(ConfirmDeleteDialog, {
      width: '450px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == null) return;
      this.customerService.remove(result);
    });
  }

  proveedorFilterOnChange(){
    this.proveedorFilterActive = !this.proveedorFilterActive;
    this.customerList.filter
  }

  applySearchFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.customerList.filter = filterValue.trim().toLowerCase();
  }

}
