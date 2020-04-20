import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order, OrderDetails, OrderLines } from '../order';
import { MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
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
  orderLines: MatTableDataSource<OrderLines>; 
  displayedColumns:String[] = ['documento', 'fecha', 'estado', 'subtotal',
                                'descuento', 'itbis', 'total', 'Editar | Eliminar'];
  displayedColumnsOrderLines:String[] = ['producto', 'cantidad', 'unidad', 'precio',
                                         'itbis', 'monto_bruto'];
  expandedElement: Order | null;
  proveedorFilterActive = false;

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
    this.orderLines = null;
    this.orderService.getOrderDetails(doc).subscribe((orderDetail) => {
      this.orderLines = new MatTableDataSource(orderDetail.lineas);
    })
  } 

  needsCurrencyFormat(column, value){
    if( column == "subtotal" ||
        column == "itbis" ||
        column == "total" ||
        column == "precio" ||
        column == "monto_bruto"){
          return this.currencyFormatter(value);
        }
    if( column == "cantidad") return Math.abs(parseInt(value));

    return value;
  }

  currencyFormatter(number){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    
    return formatter.format(number);
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
