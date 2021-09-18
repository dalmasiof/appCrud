import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { BaseGuard } from 'src/app/core/Services/guards/base.guard';
import { ProductResolver } from './services/resolves/product.resolver';


const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  {
    path: 'details/:id', component: ProductDetailsComponent, resolve: {
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
