import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { InfoPoComponent } from './info-po/info-po.component';
import { ListPoComponent } from './list-po/list-po.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    InfoPoComponent,
    ListPoComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class PurchaseOrderModule { }
