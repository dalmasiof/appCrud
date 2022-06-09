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
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Injectable()
export class BaseGuard implements CanActivate {
  /**
   *
   */
  constructor(private router: Router, private localoStrg:LocalStorageService) {}
  canActivate(): boolean {
    if(this.localoStrg.getUser()){
      return true;
    }
    else  
      return false;
  }
}
