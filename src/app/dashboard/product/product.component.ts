import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { ProductDialog } from './product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  
  onCreateProduct(){
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productService.create(result);
    })
  }

}
