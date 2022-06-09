import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseGuard } from 'src/app/core/Services/guards/base.guard';
import { InfoPoComponent } from './info-po/info-po.component';
import { ListPoComponent } from './list-po/list-po.component';

const routes: Routes = [{path:'list',component:ListPoComponent, canActivate: [BaseGuard]},
{path:'purchaseOrderById/:Id',component:InfoPoComponent, canActivate: [BaseGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
