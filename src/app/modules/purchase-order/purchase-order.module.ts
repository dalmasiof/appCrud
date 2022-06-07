import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderService } from './service/PurchaseOrder-service';
import { InfoPoComponent } from './info-po/info-po.component';
import { ListPoComponent } from './list-po/list-po.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    InfoPoComponent,
    ListPoComponent,
    
  ],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    MatProgressBarModule
  ],
  providers:[PurchaseOrderService]
})
export class PurchaseOrderModule { }
