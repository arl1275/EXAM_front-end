import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { DetallefacturaComponent } from './mantenimiento/detallefactura/detallefactura.component';
import  { FacturaComponent } from './mantenimiento/factura/factura.component';
import  { ProductosComponent } from './mantenimiento/productos/productos.component';
import  { MantenimientoRoutingModule } from './mantenimiento/mantenimiento-routing.module';


@NgModule({
  declarations:[],
  imports:[
    CommonModule, 
    DetallefacturaComponent,
    FacturaComponent,
    ProductosComponent,
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class AppModule { }
