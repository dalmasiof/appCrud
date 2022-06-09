import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseModelVM } from 'src/app/shared/Model/PurchaseModelVM';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { PurchaseOrderService } from '../service/PurchaseOrder-service';

@Component({
  selector: 'app-list-po',
  templateUrl: './list-po.component.html',
  styleUrls: ['./list-po.component.css']
})
export class ListPoComponent implements OnInit {
  poList:PurchaseModelVM[] = []
  isLoading:boolean=false

  constructor(private poSvc:PurchaseOrderService,
    private localStrgSvc:LocalStorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.fillList()
  }

  fillList(){
    this.isLoading = true;
    let UserId = this.localStrgSvc.getUser().id

    this.poSvc.GetByUserId(UserId).subscribe((x)=>{
      this.poList = x;
    },
    (err)=>{this.isLoading=false},
    ()=>this.isLoading = false)
  }


  redirectInfo(id:number){
    this.router.navigate(['PurchaseOrder/purchaseOrderById',id])
  }
}
