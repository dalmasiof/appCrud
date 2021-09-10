import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { Store } from './stores/cart.store';
import { CartModule } from '../modules/cart/cart.module';







@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    SharedModule,
    CartModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent ,
  ],
  providers:[
    Store,
    
  ]
  
})
export class CoreModule { }
