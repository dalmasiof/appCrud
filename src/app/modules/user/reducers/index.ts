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
  userReducer?:UserToken;
}


export const initiaLoginState:LoginState={
  userReducer:undefined
}

export const LoginReducer = createReducer(
  initiaLoginState,
  on(LoginActions.login,(state,action)=>{
    return {
      userReducer:action
    }
  }),

  on(LoginActions.logout,(state,action)=>{
    return {
      userReducer:undefined
    }
  })
);

