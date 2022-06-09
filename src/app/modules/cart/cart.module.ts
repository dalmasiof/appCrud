import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { PurchaseOrderService } from '../purchase-order/service/PurchaseOrder-service';


@NgModule({
  declarations: [
    ListProductsComponent
  ],  
  imports: [
    CommonModule,
    CartRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule
    
  ],
  providers:[PurchaseOrderService]
})
export class CartModule { }
