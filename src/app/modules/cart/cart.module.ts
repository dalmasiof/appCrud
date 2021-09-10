import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListProductsComponent
  ],  
  imports: [
    CommonModule,
    CartRoutingModule,
    
    
    
  ]
})
export class CartModule { }
