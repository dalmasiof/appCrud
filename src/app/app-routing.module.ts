import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'User', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'Product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
