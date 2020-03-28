import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  product: Product;
  tipoCounter = 0;
  productId = 10;
  medidas = ['und', 'yds', 'caja, 1', 'paquete, 2']

  constructor(private productService:ProductService) {
    this.product = {
      id:"",
      nombre: "",
      marca: "",
      descripcion: "",
      codigo: 0,
      itbis: "",
      maneja_inventario: 0,
      busqueda: "",
      ubicacion: "",
      tipos:[{ 
          medida: "und",
          precio: 0,
          tipo: this.tipoCounter++,
          }
      ]
    }
  }

  ngOnInit() {
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
  
  onCreateProduct(){
    this.product.id = this.productId.toString();
    this.product.itbis = this.product.itbis ? "18%":"";
    this.product.maneja_inventario = this.product.maneja_inventario ? 1:0;
    console.log(this.product);
    this.productService.create(this.product);
    this.productService.loadAll();
    
  }

}
