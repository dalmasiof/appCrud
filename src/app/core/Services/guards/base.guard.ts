import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isLogged } from 'src/app/modules/user/login.selectors';
import { LoginState } from 'src/app/modules/user/reducers';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Injectable()
export class BaseGuard implements CanActivate {
  /**
   *
   */
  constructor(private store: Store<LoginState>, private router: Router) {}
  canActivate(): Observable<boolean> {
    debugger;
    let val = this.store.pipe(select(isLogged));

    return this.store.pipe(
      select(isLogged),
      tap((loggedIn) => {
        debugger;
        if (!loggedIn) {
          this.router.navigateByUrl('User/login');
        }
      })
    );
  }
}
