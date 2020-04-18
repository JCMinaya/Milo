import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order, OrderDetails } from '../order';
import { MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDeleteDialog } from '../../confirm-delete.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class OrderListComponent implements OnInit {

  orderList: MatTableDataSource<Order>; 
  displayedColumns:String[] = ['documento', 'fecha', 'estado', 'subtotal',
                                'descuento', 'itbis', 'total', 'Editar | Eliminar'];
  expandedElement: Order | null;
  proveedorFilterActive = false;
  orderDetail: OrderDetails;

  constructor(public orderService:OrderService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.orderService.orders.subscribe(order => {
      this.orderList = new MatTableDataSource(order)
      this.orderList.filterPredicate = (data: Order, filter: string): boolean => {
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
          return (currentTerm + (data as { [key: string]: any })[key] + '◬');
        }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        return dataStr.indexOf(transformedFilter) != -1;
      }
    })
    this.orderService.loadAll();
  }

  getOrderDetails(doc: String){
    console.log(doc);
    this.orderDetail = null;
    this.orderService.getOrderDetails(doc).subscribe((orderDetail) => {
      this.orderDetail = orderDetail;
    })
  }

  onEditRow(order: Order){
    // const dialogRef = this.dialog.open(OrderDialog, {
    //   width: '550px',
    //   data: order
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result == null) return;
    //   this.orderService.update(result);
    // })
  }

  onDeleteRow(order: Order){
    const dialogRef = this.dialog.open(ConfirmDeleteDialog, {
      width: '450px',
      data: order
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == null) return;
      this.orderService.remove(result);
    });
  }

  applySearchFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.orderList.filter = filterValue.trim().toLowerCase();
  }
}
