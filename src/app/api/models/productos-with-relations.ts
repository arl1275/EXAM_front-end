/* tslint:disable */
/* eslint-disable */
import { DetalleFacturaWithRelations } from './detalle-factura-with-relations';

/**
 * (tsType: ProductosWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductosWithRelations {
  DetalleFactura?: Array<DetalleFacturaWithRelations>;
  descripcion?: string;
  id?: string;
  valor: number;

  [key: string]: any;
}
