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

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  userToken!: string;
  isLogged: boolean = false;

  userEmail!: string;

  constructor(
    private dialog: MatDialog,
    private localstrg: LocalStorageService,
    private loggedSvc: LoggedUserService,
    private store: Store<LoginState>,
    private UserinfoSvc: UserInfoService
  ) {
    
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
  }

  ngOnInit(): void {
    

    // this.store.subscribe((x)=>{
    //   
    //   if(x.user == undefined  ){
    //     this.logged = false
    //   }
    //   else{
    //     this.logged = true

    //   }
    // })
  }

  logOut() {
    this.store.dispatch(logout());

    // this.loggedIn = this.store.pipe(select(isLoggedOut));
    // console.log(this.loggedIn.subscribe())
  }

  openDialog() {
    this.dialog.open(ListProductsComponent);
  }
}
