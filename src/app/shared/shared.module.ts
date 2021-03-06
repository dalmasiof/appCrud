import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule} from '@angular/material/divider';
import { MatTableModule} from '@angular/material/table';






import { FlexLayoutModule } from '@angular/flex-layout';
import { NgBrazil, TextMask } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { LocalStorageService } from './Services/LocalStorage/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { UserInfoService } from './Services/UserService/user-info.service';
import { PurchaseOrderService } from './Services/purchaseOrderService/purchase-order.service';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,

    FlexLayoutModule,

    NgBrazil,
    TextMaskModule

  ],
  exports: [
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatTableModule,


    FlexLayoutModule,
    NgBrazil,
    TextMaskModule,

    

    // TextMask.TextMaskModule,

  ],
  providers:[

    LocalStorageService,
    ToastrService,
    UserInfoService,
    PurchaseOrderService
  ]
})
export class SharedModule { }
