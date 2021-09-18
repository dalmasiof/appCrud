import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MatCardModule } from '@angular/material/card';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card/card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ProductsService } from './services/products.service';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { ProductResolver } from './services/resolves/product.resolver';


@NgModule({
  declarations: [
    
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    SharedModule,
    NgBrazil,
    TextMaskModule
    
  ],
  providers:[
    ProductsService,
    ProductResolver
  ]
})
export class ProductModule { }
