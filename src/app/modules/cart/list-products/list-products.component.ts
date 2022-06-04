import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { PurchaseModelVM } from 'src/app/shared/Model/PurchaseModelVM';
import { UserModel } from 'src/app/shared/Model/UserModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ProductActions } from '../../product/product.actions-type';
import { productSelector } from '../../product/product.selectors';
import { ProductState } from '../../product/reducers';
import { PurchaseOrderService } from '../../purchase-order/service/PurchaseOrder-service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  productsList: ProductModel[] = [];
  total: number = 0;
  $productCard = this.store.pipe(select(productSelector));
  logedUser: UserModel;

  constructor(
    private localstorageSvc: LocalStorageService,
    private store: Store<ProductState>,
    private poSvc: PurchaseOrderService,
    private toastSvc: ToastrService,
    private dialogRef: MatDialogRef<ListProductsComponent>,
    private router:Router
  ) {
    this.$productCard.subscribe((x) => {
      let prod = x.ProductReducer?.product;
      if (prod) {
        if (prod.type == `[card ProdList; cart page]Remove prod from cart`) {
          this.productsList = this.productsList.filter((x) => x.id != prod.id);
          this.countItens();
        }
      }
    });

    this.logedUser = this.localstorageSvc.getUser();
  }

  ngOnInit(): void {
    this.productsList = this.localstorageSvc.getCartItens();
    this.countItens();
  }

  onBtnRemoveClick(product: ProductModel) {
    // this.localstorageSvc.setCartItens(this.productsList)
    this.store.dispatch(ProductActions.removeFromCart(product));

    this.countItens();
  }

  countItens() {
    this.total = 0;
    this.productsList.forEach((x) => (this.total += x.value));
  }

  onBtnFinishrOrder() {
    debugger;
    let objPo: PurchaseModelVM = {
      id: 0,
      discount: 0,
      idUserata: this.logedUser.id,
      products: this.productsList,
      statusDelivery: 'On the way',
      statusPO: 'Open',
      total: this.total,
      totalToPay: this.total,
    };

    this.poSvc.Create(objPo).subscribe((x) => {
      this.localstorageSvc.setCartItens([]);
      this.productsList.forEach((x) => {
        this.store.dispatch(ProductActions.removeFromCart(x));
      });
      this.productsList = [];
      this.toastSvc.success("Purchase Order created","Success")
      this.dialogRef.close()
      this.router.navigateByUrl('PurchaseOrder/list')
    });
  }
}
