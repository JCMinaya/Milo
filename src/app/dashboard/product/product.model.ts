export interface Product {
    id:string;
    nombre: string;
    marca: string;
    descripcion: string;
    codigo: number;
    itbis: string;
    maneja_inventario: number;
    busqueda: string;
    ubicacion: string;
    tipos:[{ 
        medida: string;
        precio:number;
        tipo: number;
        }
    ]
}
