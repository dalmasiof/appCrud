import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPoComponent } from './info-po/info-po.component';
import { ListPoComponent } from './list-po/list-po.component';

const routes: Routes = [{path:'list',component:ListPoComponent},
{path:'purchaseOrderById/:Id',component:InfoPoComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
