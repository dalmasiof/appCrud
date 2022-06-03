import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MatCardModule } from '@angular/material/card';
import localePt from '@angular/common/locales/pt';
import * as fromProdStore from './reducers';

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
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductRemoveComponent } from './product-remove/product-remove.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './product.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CardComponent,
    ImagePipe,
    ProductUpdateComponent,
    ProductRemoveComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    SharedModule,
    NgBrazil,
    TextMaskModule,
    MatTooltipModule,
    StoreModule.forFeature(
      fromProdStore.prodStoreFeatureKey,
      fromProdStore.ProductReducer,
    ),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers:[
    ProductsService,
    ProductResolver
  ]
})
export class ProductModule { }
