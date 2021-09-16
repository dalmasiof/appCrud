import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Injectable()
export class BaseGuard implements CanActivate {
  /**
   *
   */
  constructor(private localstrg: LocalStorageService) {


  }
  canActivate(): boolean {
    
    let t = this.localstrg.getUser();
    
    if (t.token != undefined){
      return true;
    }

    return false;
  }

}
