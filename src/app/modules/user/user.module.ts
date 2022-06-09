import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from './services/user-service.service';
import { BaseGuard } from 'src/app/core/Services/guards/base.guard';



const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },

];

@NgModule({
  declarations: [

    LoginComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers:[
    UserServiceService
  ]

})
export class UserModule { }
