import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { UserToken } from 'src/app/shared/Model/UserToken';
import { LoginActions } from '../login.actions-type';

export const userStoreFeatureKey = 'userReducer';

export interface LoginState {
  user:any;
}


export const initiaLoginState:LoginState={
  user:undefined
}

export const LoginReducer = createReducer(
  initiaLoginState,
  on(LoginActions.login,(state,action)=>{
    return {
      user:action
    }
  })
);

