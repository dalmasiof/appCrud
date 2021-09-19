import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { BaseGuard } from 'src/app/core/Services/guards/base.guard';
import { ProductResolver } from './services/resolves/product.resolver';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductRemoveComponent } from './product-remove/product-remove.component';


const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  {
    path: 'details/:id', component: ProductDetailsComponent, resolve: {
      product: ProductResolver
    }
  },
  {
    path: 'update/:id', component: ProductUpdateComponent, resolve: {
      product: ProductResolver
    }
  },
  {
    path: 'delete/:id', component: ProductRemoveComponent, resolve: {
      product: ProductResolver
    }
  },
  { path: 'create', component: CreateProductComponent, canActivate: [BaseGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
