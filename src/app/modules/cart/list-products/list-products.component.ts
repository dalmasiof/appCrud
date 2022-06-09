import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductService } from 'src/app/core/Services/prodService/product.service';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

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

  constructor(
    private localStrgSvc: LocalStorageService,
    private prodSvc: ProductService
  ) {
    this.productsList = this.localStrgSvc.getCartItens();
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


  }

  onBtnFinishrOrder() {
    
  }
}
