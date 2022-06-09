import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoggedUserService } from 'src/app/core/Services/loggedUser/logged-user.service';
<<<<<<< HEAD
import { UserModel } from '../../Model/UserModel';
=======
>>>>>>> master
import { ProductModel } from '../../Model/ProductModel';

@Injectable()
export class LocalStorageService {
  constructor(private lgedUser: LoggedUserService) {}

<<<<<<< HEAD
  setUser(objUser: UserModel) {
    localStorage.setItem(environment.UserLocalStorage, JSON.stringify(objUser));
    this.lgedUser.set(true);
  }

  getUser(): any {
    let objUser = JSON.parse(localStorage.getItem('User')!);
=======


  constructor(private lgedUser:LoggedUserService) {
    
   }

  setUser(objUser: UserToken) {
    localStorage.setItem('user', JSON.stringify(objUser))
    this.lgedUser.set(true)
  }

  getUser(): any {

    let objUser = JSON.parse(localStorage.getItem("user")!);
>>>>>>> master

    return objUser;
  }

  clearUser() {
<<<<<<< HEAD
    localStorage.removeItem(environment.UserLocalStorage);
    this.lgedUser.set(false);
  }

  getCartItens(): ProductModel[] {
    let objCart = JSON.parse(
      localStorage.getItem('cartItens')!
    ) as ProductModel[];
=======
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
  

>>>>>>> master

    return objCart;
  }

  setCartItens(cartItens: ProductModel[]) {
    localStorage.setItem('cartItens', JSON.stringify(cartItens));
  }
}
