import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent} from './create-product/create-product.component';


const routes: Routes = [
  {path:'list',component:ProductListComponent},
  {path:'details:id',component:ProductDetailsComponent},
  {path:'create',component:CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
