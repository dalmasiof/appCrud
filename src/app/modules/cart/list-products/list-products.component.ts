import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/core/Services/prodService/product.service';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { PurchaseModelVM } from 'src/app/shared/Model/PurchaseOrderVM';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { PurchaseOrderService } from 'src/app/shared/Services/purchaseOrderService/purchase-order.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  productsList: ProductModel[] = [];

  total: number = 0;
  isLoading: boolean = false;
  onCart?: boolean;
  userInfo:UserModel;

  constructor(
    private localStrgSvc: LocalStorageService,
    private prodSvc: ProductService,
    private router: Router,
    private dialogRef:MatDialogRef<ListProductsComponent>,
    private toastSvc:ToastrService,
    private poSvc:PurchaseOrderService

  ) {
    this.productsList = this.localStrgSvc.getCartItens();
    this.productsList.forEach((x)=>{
      this.total += x.value
    })
    this.userInfo = this.localStrgSvc.getUser()

  }

  ngOnInit(): void {}

  onBtnRemoveClick(prod: ProductModel) {
    
    let prodList = this.localStrgSvc.getCartItens();
    let prodOnList = prodList.filter((x) => x.id != prod.id);

    if (prodOnList) {
      this.localStrgSvc.setCartItens(prodOnList);
      this.prodSvc.set(this.localStrgSvc.getCartItens().length);
      this.productsList = prodOnList;
    }

    this.prodSvc.set(prodOnList.length);
    this.total -= prod.value 

  }

  onBtnFinishrOrder() {
    this.isLoading = true
    let objPo: PurchaseModelVM = {
      id: 0,
      discount: 0,
      idUserata: this.userInfo.id,
      products: this.productsList,
      statusDelivery: 'On the way',
      statusPO: 'Open',
      total: this.total,
      totalToPay: this.total,
    };

    this.poSvc.Create(objPo).subscribe((x) => {
      this.localStrgSvc.setCartItens([]);
        this.prodSvc.set(0);
      this.productsList = [];
      this.dialogRef.close()
      this.toastSvc.success("Succes on create purchase Order","Success")

      this.router.navigateByUrl('PurchaseOrder/list')
    },
    (err)=>{
      this.toastSvc.error("Error on create Purchase Order","Status "+err.status)
      this.isLoading = false;
    },()=>this.isLoading=false);
  }
}
