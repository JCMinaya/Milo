import { Component, OnInit, Inject } from '@angular/core';
import { Order, OrderDetails } from './order';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'edit-order-dialog',
    templateUrl: './order-dialog.html',
  })
  export class OrderDialog implements OnInit {
  
    _order: Order;
    _orderDetails: OrderDetails;
    creatingNewOrder: boolean = false;
    constructor(
      public dialogRef: MatDialogRef<OrderDialog>,
      @Inject(MAT_DIALOG_DATA) public order: Order,
      @Inject(MAT_DIALOG_DATA) public orderDetails: OrderDetails) {}
  
    ngOnInit(){
        if(this.order == null) this.creatingNewOrder = true;

        if(this.creatingNewOrder){
            this._order = { 
                documento: "",
                tipo: 1,
                estado: "",
                entidad: 0,
                descripcion: "",
                fecha: "",
                ncf_rnc: null,
                ncf_tipo: null,
                ncf_secuencia: 0,
                ncf_vigencia: 0,
                subtotal: 0,
                descuentos: 0,
                itbis: 0,
                total: 0,
                monto_pendiente: 0,
                descuento_porcentaje: "",
                descuento_plano: 0,
                termino: "",
                vencimiento: "",
                proposito: "",
                otros_campos: []
            };
            this._orderDetails = {
                documento: "",
                lineas: [
                    {
                        fecha: new Date().toString(),
                        maneja_inventario: 0,
                        producto: "",
                        descripcion: "",
                        cantidad: 0,
                        unidad: "und",
                        unidad_inventario: 0,
                        precio: 0,
                        monto_neto: 0,
                        itbis: 0,
                        monto_bruto: 0,
                    }
                ]
            }
        }else{
            this._order = Object.assign({}, this.order);
            this._orderDetails = Object.assign({}, this.orderDetails);
        }
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  
  }