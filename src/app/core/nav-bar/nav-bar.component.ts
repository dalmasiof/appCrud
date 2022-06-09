import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListProductsComponent } from 'src/app/modules/cart/list-products/list-products.component';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { UserInfoService } from 'src/app/shared/Services/UserService/user-info.service';
import { LoggedUserService } from '../Services/loggedUser/logged-user.service';
import { ProductService } from '../Services/prodService/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  userInf?: UserModel;
  isLogged: boolean = false;
  countProds?: number

  constructor(
    private dialog: MatDialog,
    private localstrg: LocalStorageService,
    private loggedSvc: LoggedUserService,
    private UserinfoSvc: UserInfoService,
    private prodSvc:ProductService
  ) {}

  ngOnInit(): void {
 

    this.loggedSvc.userLogged.subscribe((x) => {
      if (x) {
        this.userInf = this.localstrg.getUser();
        this.isLogged = true;
      } else {
        this.isLogged = false;
        this.userInf = undefined;
      }
    });

    this.prodSvc.prodQtd.subscribe((x)=>{
      if(x == 0){
        this.countProds = undefined;
      }
      else{
        this.countProds = this.countProds = x;
      }
    })

    if(this.localstrg.getUser()){
      this.loggedSvc.set(true);
    }

    let qtdProdOnCart = this.localstrg.getCartItens().length
    if(qtdProdOnCart && qtdProdOnCart>0)
      this.countProds = qtdProdOnCart

  }

  logOut() {
    this.loggedSvc.set(false);
    
  }

  openDialog() {
    this.dialog.open(ListProductsComponent);
  }
}
