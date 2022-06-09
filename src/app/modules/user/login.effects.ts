import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginActions } from './login.actions-type';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/core/Services/UserInfoService/user-info.service';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Injectable()
export class LoginEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.login),
        tap((action) => {
          this.localStorageSvc.setCartItens([]);
          localStorage.setItem('user', JSON.stringify(action));
          this.UserinfoSvc.addData(action);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.logout),
        tap((action) => {
          this.localStorageSvc.setCartItens([]);
          localStorage.removeItem('user');
          this.router.navigateByUrl('User/login');
          this.UserinfoSvc.addData(null);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private UserinfoSvc: UserInfoService,
    private localStorageSvc: LocalStorageService
  ) {}
}
