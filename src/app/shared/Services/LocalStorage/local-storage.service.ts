import { Injectable } from '@angular/core';
import { UserToken } from 'src/app/shared/Model/UserToken';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoggedUserService } from 'src/app/core/Services/loggedUser/logged-user.service';

@Injectable()
export class LocalStorageService {



  constructor(private lgedUser:LoggedUserService) {
    
   }

  setUser(objUser: UserToken) {
    localStorage.setItem(environment.UserLocalStorage, JSON.stringify(objUser))
    this.lgedUser.set(true)
  }

  getUser(): any {

    let objUser = JSON.parse(localStorage.getItem("User")!);

    return objUser;

  }

  clearUser() {
    localStorage.removeItem(environment.UserLocalStorage);
    this.lgedUser.set(false)

  }

  



}
