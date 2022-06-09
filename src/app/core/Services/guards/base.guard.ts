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
    
    let val = this.store.pipe(select(isLogged));

    return this.store.pipe(
      select(isLogged),
      tap((loggedIn) => {
        
        if (!loggedIn) {
          this.router.navigateByUrl('User/login');
        }
      })
    );
  }
}
