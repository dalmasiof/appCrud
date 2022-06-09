import { Injectable } from '@angular/core';
import { UserToken } from 'src/app/shared/Model/UserToken';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoggedUserService } from 'src/app/core/Services/loggedUser/logged-user.service';
import { ProductModel } from '../../Model/ProductModel';

@Injectable()
export class LocalStorageService {



  constructor(private lgedUser:LoggedUserService) {
    
   }

  setUser(objUser: UserToken) {
    localStorage.setItem('user', JSON.stringify(objUser))
    this.lgedUser.set(true)
  }

  getUser(): any {

    let objUser = JSON.parse(localStorage.getItem("user")!);

    return objUser;

  }

  clearUser() {
    localStorage.removeItem('user');
    this.lgedUser.set(false)

  }

  getCartItens():ProductModel[]{
    let objCart = JSON.parse(localStorage.getItem("cartItens")!) as ProductModel[];

    return objCart;
  }

  setCartItens(cartItens:ProductModel[]){
    localStorage.setItem('cartItens', JSON.stringify(cartItens))
  }
  



}
