/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Factura, 'id'>, schemaOptions: { title: 'NewFactura', exclude: [ 'id' ] })
 */
export interface NewFactura {
  cliente: string;
  correlativo: number;
  direccion: string;
  email?: string;
  fecha: string;
  telefono: string;
}
