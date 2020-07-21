import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './product.service';
import { ProductDialog } from './product-dialog.component';
import { EventEmitter } from 'protractor';

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


}
