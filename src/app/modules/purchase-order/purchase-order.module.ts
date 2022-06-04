import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderService } from './service/PurchaseOrder-service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule
  ],
  providers:[PurchaseOrderService]
})
export class PurchaseOrderModule { }
