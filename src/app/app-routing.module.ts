import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'User',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'Product',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },

  {
    path: 'PurchaseOrder',
    loadChildren: () =>
      import('./modules/purchase-order/purchase-order.module').then(
        (m) => m.PurchaseOrderModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
