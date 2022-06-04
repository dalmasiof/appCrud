import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductActions } from './product.actions-type';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private LocalStorageSvc: LocalStorageService,
  ) {}

  addToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.addToCart),
        tap((action) => {
          let storageList = this.LocalStorageSvc.getCartItens() as ProductModel[]
          if(!storageList)
            storageList = []
            
          storageList.push(action)
          this.LocalStorageSvc.setCartItens(storageList);
        })
      ),
    { dispatch: false }
  );

  removeToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.removeFromCart),
        tap((action) => {
          
          let prodList = this.LocalStorageSvc.getCartItens().filter((x)=> x.id != action.id)

          this.LocalStorageSvc.setCartItens(prodList)
        })
      ),
    { dispatch: false }
  );

 
}
