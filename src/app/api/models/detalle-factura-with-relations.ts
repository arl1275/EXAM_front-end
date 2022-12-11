/* tslint:disable */
/* eslint-disable */
import { FacturaWithRelations } from './factura-with-relations';

/**
 * (tsType: DetalleFacturaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DetalleFacturaWithRelations {
  ProductoID: string;
  cantidad: number;
  factura?: FacturaWithRelations;
  facturaID: string;
  facturaId?: string;
  id?: any;
  producstos?: string;

  [key: string]: any;
}
