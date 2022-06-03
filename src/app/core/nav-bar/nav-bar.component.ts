import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListProductsComponent } from 'src/app/modules/cart/list-products/list-products.component';
import { logout } from 'src/app/modules/user/login.actions';
import { isLogged, isLoggedOut } from 'src/app/modules/user/login.selectors';
import { LoginState } from 'src/app/modules/user/reducers';
import { UserToken } from 'src/app/shared/Model/UserToken';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { UserInfoService } from 'src/app/core/Services/UserInfoService/user-info.service';
import { LoggedUserService } from '../Services/loggedUser/logged-user.service';
import { ProductState } from 'src/app/modules/product/reducers';
import { productSelector } from 'src/app/modules/product/product.selectors';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  userToken!: string;
  isLogged: boolean = false;
  countProds:number | undefined

  userEmail!: string;
  $productCard = this.store.pipe(select(productSelector));

  constructor(
    private dialog: MatDialog,
    private localstrg: LocalStorageService,
    private loggedSvc: LoggedUserService,
    private store: Store<ProductState>,
    private UserinfoSvc: UserInfoService
  ) {
    this.$productCard.subscribe((x) => {
      let prod = x.ProductReducer?.product as ProductModel;
      if(prod)
        if(this.countProds)
          this.countProds++
          else
          this.countProds = 1
    });
    this.UserinfoSvc.userData$.subscribe((x) => {
      let user = localStorage.getItem('user');
      if (user != null) {
        let jsonUser = JSON.parse(user);
        this.userEmail = jsonUser.name;
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });

    let cartItens = this.localstrg.getCartItens();
    if(cartItens && cartItens.length>0){
      this.countProds = cartItens.length
    }
  }

  ngOnInit(): void {
   
  }

  logOut() {
    this.store.dispatch(logout());

  }

  openDialog() {
    this.dialog.open(ListProductsComponent,{
      "width":"600px"
    });
  }
}
