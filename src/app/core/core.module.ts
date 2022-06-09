import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

<<<<<<< HEAD
import { MatToolbarModule} from '@angular/material/toolbar';  
import { MatBadgeModule} from '@angular/material/badge';  
=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
>>>>>>> master
import { SharedModule } from '../shared/shared.module';
import { CartModule } from '../modules/cart/cart.module';
import { HttpClientService } from './Services/HttpClient/http-client.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseGuard } from './Services/guards/base.guard';
import { LoggedUserService } from './Services/loggedUser/logged-user.service';
import { httpInterceptor } from './Services/interceptor/httpInterceptor.interceptor';
<<<<<<< HEAD
import { ProductService } from './Services/prodService/product.service';
=======
import { UserInfoService } from './Services/UserInfoService/user-info.service';
import { StoreModule } from '@ngrx/store';
import * as fromProdStore from '../modules/product/reducers';
>>>>>>> master

import { ProductEffects } from '../modules/product/product.effects';

import { EffectsModule } from '@ngrx/effects';
import { MatTooltipModule } from '@angular/material/tooltip';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
];

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    SharedModule,
    CartModule,
    HttpClientModule,
    MatBadgeModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent ,
    
  ],
  providers:[
    // StoreService,
    HttpClientService,
    BaseGuard,
    LoggedUserService,
    httpInterceptorProviders,
<<<<<<< HEAD
    ProductService
    
  ]
  
=======
    UserInfoService,
  ],
>>>>>>> master
})
export class CoreModule {}
