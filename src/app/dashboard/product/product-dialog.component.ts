import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'edit-product-dialog',
    templateUrl: './editProductDialog.html',
  })
  export class ProductDialog implements OnInit {
  
    _product: Product;
    tipoCounter = 0;
    medidas = ['und', 'yds', 'caja, 1', 'paquete, 2'];
    constructor(
      public dialogRef: MatDialogRef<ProductDialog>,
      @Inject(MAT_DIALOG_DATA) public product: Product) {}
  
    ngOnInit(){
      this.tipoCounter = this.product.tipos.length;
      this._product = Object.assign({}, this.product);
      
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    public addTipo() : void {
          this.product.tipos.push({
        tipo: this.tipoCounter++,
        medida: "",
        precio: 0
          });
    }
  
    public onRemoveTipo( index: number ) : void {
          this.product.tipos.splice( index, 1 );
      }
  
  
  }