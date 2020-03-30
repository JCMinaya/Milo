import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'edit-product-dialog',
    templateUrl: './productDialog.html',
  })
  export class ProductDialog implements OnInit {
  
    _product: Product;
    tipoCounter = 0;
    medidas = ['und', 'yds', 'caja, 1', 'paquete, 2'];
    creatingNewProduct: boolean = false;
    constructor(
      public dialogRef: MatDialogRef<ProductDialog>,
      @Inject(MAT_DIALOG_DATA) public product: Product) {}
  
    ngOnInit(){
        if(this.product == null) this.creatingNewProduct = true;

        if(this.creatingNewProduct){
            this._product = {
                id:"",nombre: "",marca: "",descripcion: "",codigo: 0,itbis: "",maneja_inventario: 0,
                busqueda: "",ubicacion: "",tipos:[{ medida: "und",precio: 0,tipo: this.tipoCounter++}]
            }
        }else{
            this.tipoCounter = this.product.tipos.length;
            this._product = Object.assign({}, this.product);
        }
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    public addTipo() : void {
        this._product.tipos.push({
            tipo: this.tipoCounter++,
            medida: "",
            precio: 0
        });
    }
  
    public onRemoveTipo( index: number ) : void {
        this._product.tipos.splice( index, 1 );
    }
  
  
  }