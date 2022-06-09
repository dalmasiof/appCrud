import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { ProductModel} from 'src/app/shared/Model/ProductModel';
import { ProductActions } from '../product.actions-type';

export const prodStoreFeatureKey = 'ProductReducer';

export interface ProductState {
  product?:ProductModel;
}


export const initiaProdState:ProductState={
  product:undefined
}

export const ProductReducer = createReducer(
  initiaProdState,
  on(ProductActions.addToCart,(state,action)=>{
    return {
      product:action
    }
  }),

  on(ProductActions.removeFromCart,(state,action)=>{
    return {
      product:action
    }
  })
);

