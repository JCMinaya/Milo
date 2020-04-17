import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './product.service';
import { ProductDialog } from './product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: string;
  constructor(private productService:ProductService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  
  onCreateProduct(){
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == null) return;
      // console.log(result);
      result.id = Math.floor((Math.random() * 10000000) + 1).toString();
      result.itbis = result.itbis ? "18%": "";
      this.productService.create(result);
    })
  }

}
