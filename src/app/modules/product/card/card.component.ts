import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { Store } from '../../../core/stores/cart.store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product!: ProductModel;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addToCart(id: number) {
    const list = this.store.value.productList;
    debugger
    list.forEach((prod: ProductModel) => {
      if (id === prod.id) {
        prod.onCart=true;

      } 
    });
    debugger

    this.store.set('productList',list);

  }
  removeFromCart(id: number) {
    const list = this.store.value.productList;
    debugger
    const prodLIst = list.forEach((prod: ProductModel) => {
      if (id === prod.id) {
        prod.onCart=false;

      } 
    });
    this.store.set('productList', prodLIst);

  }



}
