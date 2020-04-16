export interface OrderDetail {
    documento: string,
    lineas: [{
        fecha: Date,
        maneja_inventario: number,
        producto: string,
        descripcion: string,
        cantidad: number,
        unidad: string,
        unidad_inventario: number,
        precio: number,
        monto_neto: number,
        itbis: number,
        monto_bruto: number
    }]
}