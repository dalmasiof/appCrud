import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from './services/user-service.service';
import { ListUserComponent } from './list-user/list-user.component';
import { BaseGuard } from 'src/app/core/Services/guards/base.guard';
import { StoreModule } from '@ngrx/store';
import * as fromUserStore from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './login.effects';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: 'create',
    component: CreateUserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'list',
    component: ListUserComponent,
    canActivate: [BaseGuard],
  },
  {
    path: 'edit',
    component: EditUserComponent,
    canActivate: [BaseGuard],
  },
];

@NgModule({
  declarations: [
    CreateUserComponent,
    LoginComponent,
    ListUserComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatProgressBarModule,
    StoreModule.forFeature(
      fromUserStore.userStoreFeatureKey,
      fromUserStore.LoginReducer,
    ),
    
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [UserServiceService],
})
export class UserModule {}
