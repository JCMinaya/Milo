import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './product/product.model';
import { Customer } from './customer/customer.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'confirmDeleteDialog',
    templateUrl: './confirm-delete-dialog.html',
  })
  export class ConfirmDeleteDialog {
  
    constructor(
      public dialogRef: MatDialogRef<ConfirmDeleteDialog>,
      @Inject(MAT_DIALOG_DATA) public product: Product,
      @Inject(MAT_DIALOG_DATA) public customer: Customer,
      public entity: String) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }