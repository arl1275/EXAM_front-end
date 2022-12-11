/* tslint:disable */
/* eslint-disable */
import { DetalleFacturaWithRelations } from './detalle-factura-with-relations';

/**
 * (tsType: FacturaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface FacturaWithRelations {
  cliente: string;
  correlativo: number;
  detalleFacturas?: Array<DetalleFacturaWithRelations>;
  direccion: string;
  email?: string;
  fecha: string;
  id?: any;
  telefono: string;
}
