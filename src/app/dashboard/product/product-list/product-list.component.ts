import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ProductDialog } from '../product-dialog.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent implements OnInit {

  productList: MatTableDataSource<Product>;
  displayedColumns = ['nombre', 'marca', 'codigo', 'itbis', 'ubicacion', 'Editar | Eliminar'];
  expandedElement: Product | null;

  constructor(private productService:ProductService, public dialog: MatDialog) { }  

  ngOnInit() {
    this.productService.products.subscribe(products => {
      this.productList = new MatTableDataSource(products);
      this.productList.filterPredicate = (data: Product, filter: string): boolean => {
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
          return (currentTerm + (data as { [key: string]: any })[key] + '◬');
         }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
         
         const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
         
         return dataStr.indexOf(transformedFilter) != -1;
       }
    })
    this.productService.loadAll();
  }

  onEditRow(product: Product){
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '550px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productService.update(result);
    })
  }

  onDeleteRow(product: Product){
    const dialogRef = this.dialog.open(ConfirmDeleteDialog, {
      width: '450px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.productService.remove(result);
    });
  }

  applySearchFilter(filterValue:string){
    this.productList.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'confirmDeleteDialog',
  templateUrl: '../confirmDeleteDialog.html',
})
export class ConfirmDeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public product: Product) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}