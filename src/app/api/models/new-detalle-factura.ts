/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<DetalleFactura, 'id'>, schemaOptions: { title: 'NewDetalleFactura', exclude: [ 'id' ] })
 */
export interface NewDetalleFactura {
  ProductoID: string;
  cantidad: number;
  facturaID: string;
  facturaId?: string;
  producstos?: string;

  [key: string]: any;
}
