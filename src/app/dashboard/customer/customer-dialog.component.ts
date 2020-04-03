import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from './customer.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'edit-customer-dialog',
    templateUrl: './customer-dialog.html',
  })
  export class CustomerDialog implements OnInit {
  
    public _customer: Customer;
    tipos = ['Cliente', 'Proveedor', 'Híbrido'];
    ncfTipos = [{id: "01", descripcion: "Factura de Crédito Fiscal"},
                {id: "02", descripcion: "Factura de Consumo"},
                {id: "03", descripcion: "Nota de Débito"},
                {id: "04", descripcion: "Nota de Crédito"},
                {id: "11", descripcion: "Registro de Proveedor Informal"},
                {id: "13", descripcion: "Registro de Gastos Menores"},
                {id: "14", descripcion: "Factura de Regimen Especial"},
                {id: "15", descripcion: "Factura Gubernamental"},
                {id: "90", descripcion: "Salida"},
                {id: "91", descripcion: "Entrada"},
            ]
    creatingNewCustomer: boolean = false;
    constructor(
      public dialogRef: MatDialogRef<CustomerDialog>,
      @Inject(MAT_DIALOG_DATA) public customer: Customer) {}
  
    ngOnInit(){
        if(this.customer == null) this.creatingNewCustomer = true;

        if(this.creatingNewCustomer){
            this._customer = {
                id: 0, rnc: 0, nombre: "",tipo: this.tipos[0], creditoDias: 15, creditoMonto: 0,
                ncfTipo: 1, correo: "", telefonoFijo: "", telefonoMovil: ""
            }
        }else{
            this._customer = Object.assign({}, this.customer);
        }
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  
  }