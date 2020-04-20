export interface Order {
    documento: string,
    tipo: number,
    estado: string,
    entidad: number,
    descripcion: string,
    fecha: string,
    ncf_rnc: number,
    ncf_tipo: number,
    ncf_secuencia: number,
    ncf_vigencia: number,
    subtotal: number,
    descuentos: number,
    itbis: number,
    total: number,
    monto_pendiente: number,
    descuento_porcentaje: string,
    descuento_plano: number,
    termino: string,
    vencimiento: string,
    proposito: string,
    otros_campos: object
}

export interface OrderDetails{
    documento: string,
    lineas: OrderLines[]
}

export interface OrderLines{
    fecha: string;
    maneja_inventario: number;
    producto: string;
    descripcion: string;
    cantidad: any;
    unidad: string;
    unidad_inventario: number;
    precio: number;
    monto_neto: number;
    itbis: number;
    monto_bruto: number;
}