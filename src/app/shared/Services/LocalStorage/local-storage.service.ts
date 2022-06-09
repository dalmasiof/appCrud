import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoggedUserService } from 'src/app/core/Services/loggedUser/logged-user.service';
import { UserModel } from '../../Model/UserModel';

@Injectable()
export class LocalStorageService {



  constructor(private lgedUser:LoggedUserService) {
    
   }

  setUser(objUser: UserModel) {
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
