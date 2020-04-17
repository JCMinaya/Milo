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