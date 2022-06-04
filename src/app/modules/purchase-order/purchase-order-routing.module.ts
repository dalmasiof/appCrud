import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPoComponent } from './list-po/list-po.component';

const routes: Routes = [{path:'list',component:ListPoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
