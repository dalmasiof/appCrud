import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ProductActions } from '../product.actions-type';
import { productSelector } from '../product.selectors';
import { ProductState } from '../reducers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product!: ProductModel;

  $productCard = this.store.pipe(select(productSelector));

  onCart: boolean = false;

  constructor(
    private router: Router,
    private store: Store<ProductState>,
    private LocalStorageSvc: LocalStorageService
  ) {
    this.$productCard.subscribe((x) => {
      let prod = x.ProductReducer?.product;
      if (prod) {
        if (prod.id == this.product.id) {
          this.onCart = !this.onCart;
        }
      }
    });
  }

  ngOnInit(): void {
    this.verifyProdOnList();
  }

  verifyProdOnList() {
    let prodOnList = this.LocalStorageSvc.getCartItens().filter(
      (x) => x.id == this.product.id
    );
    if (prodOnList && prodOnList.length > 0) {
      this.onCart = true;
    } else {
      this.onCart = false;
    }
  }

  addToCart(product: ProductModel): void {
    this.store.dispatch(ProductActions.addToCart(product));
    this.verifyProdOnList();
  }

  removeToCart(product: ProductModel): void {
    this.store.dispatch(ProductActions.removeFromCart(product));
    this.verifyProdOnList();
  }
}
