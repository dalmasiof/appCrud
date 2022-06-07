import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderService } from './service/PurchaseOrder-service';
import { InfoPoComponent } from './info-po/info-po.component';
import { ListPoComponent } from './list-po/list-po.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    InfoPoComponent,
    ListPoComponent,
    
  ],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[PurchaseOrderService]
})
export class PurchaseOrderModule { }
