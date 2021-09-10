import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';




import { FlexLayoutModule } from '@angular/flex-layout';
import { NgBrazil, TextMask } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { ProductsService } from './Services/products.service';
import { Store } from '../core/stores/cart.store';





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

    FlexLayoutModule,
    NgBrazil,
    TextMaskModule,

    // TextMask.TextMaskModule,

  ],
  providers:[
    ProductsService,
    
  ]
})
export class SharedModule { }
