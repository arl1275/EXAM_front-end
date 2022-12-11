import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { FacturaComponent } from './factura/factura.component';
import { DetallefacturaComponent } from './detallefactura/detallefactura.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    FacturaComponent,
    DetallefacturaComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
