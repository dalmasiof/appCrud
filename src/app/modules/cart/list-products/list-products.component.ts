import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ProductActions } from '../../product/product.actions-type';
import { productSelector } from '../../product/product.selectors';
import { ProductState } from '../../product/reducers';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  productsList: ProductModel[] = [];
  total: number = 0;
  $productCard = this.store.pipe(select(productSelector));

  constructor(
    private localstorageSvc: LocalStorageService,
    private store: Store<ProductState>
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
    this.total = 0
    this.productsList.forEach((x) => (this.total += x.value));
  }
}
