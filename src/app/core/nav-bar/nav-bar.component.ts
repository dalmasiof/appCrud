import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { ListProductsComponent } from 'src/app/modules/cart/list-products/list-products.component';
import { UserToken } from 'src/app/shared/Model/UserToken';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { LoggedUserService } from '../Services/loggedUser/logged-user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userToken!:string
  logged:boolean=false

  constructor(private dialog: MatDialog, private localstrg:LocalStorageService, private loggedSvc:LoggedUserService) { }

  ngOnInit(): void {
    
    this.loggedSvc.get()
    .subscribe((x)=>{      
      this.logged=x;
    }); 
    let token:any = this.localstrg.getUser() 

    if(token! == undefined){
      this.loggedSvc.set(false)  
    }
    else{
      this.loggedSvc.set(true)  
    }
  }

  openDialog() {
    this.dialog.open(ListProductsComponent);
  }

}
