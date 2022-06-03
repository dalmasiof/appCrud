import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
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

  $productCard = this.store.pipe(select(productSelector))

  constructor(private router: Router, private store: Store<ProductState>) {}

  ngOnInit(): void {

  }

  addToCart(product: ProductModel): void {
    this.store.dispatch(ProductActions.addToCart(product));
  }

  removeToCart(product: ProductModel):void {
    this.store.dispatch(ProductActions.addToCart(product));
  }
}
