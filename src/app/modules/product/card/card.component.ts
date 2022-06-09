import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/core/Services/prodService/product.service';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product!: ProductModel;
  onCart?: boolean;
  constructor(
    private router: Router,
    private localStrgSvc: LocalStorageService,
    private prodSvc: ProductService,

    
  ) {
    this.prodSvc.prodQtd.subscribe((x)=>{
      this.verifyProdOnList()

    })
  }

  ngOnInit(): void {
    this.verifyProdOnList();
  }

  verifyProdOnList() {
    let prodList = this.localStrgSvc
      .getCartItens()
      if(!prodList){
        return;
      }
      let prodOnList = prodList.filter((x) => x.id == this.product.id);

    if (prodOnList && prodOnList.length > 0) {
      this.onCart = true;
    } else {
      this.onCart = false;
    }
  }

  addToCart(product: ProductModel): void {
    this.addProdToStorage(product);
    this.prodSvc.set(this.localStrgSvc.getCartItens().length)
    this.verifyProdOnList();
  }

  removeToCart(product: ProductModel): void {
    this.removeProdToStorage(product);
    this.prodSvc.set(this.localStrgSvc.getCartItens().length)
    this.verifyProdOnList();
  }

  addProdToStorage(prod: ProductModel) {
    let prodList = this.localStrgSvc.getCartItens();
    if(!prodList){
      prodList = []
    }
    prodList.push(prod);

    this.localStrgSvc.setCartItens(prodList);
  }

  removeProdToStorage(prod: ProductModel) {
    let prodList = this.localStrgSvc.getCartItens();
    let prodOnList = prodList
      .filter((x) => x.id != this.product.id);

    if (prodOnList && prodOnList.length > 0) {

      this.onCart = true;
    } else {
      this.onCart = false;
    }

    this.localStrgSvc.setCartItens(prodOnList);
  }
}
