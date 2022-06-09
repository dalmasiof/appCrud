import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products!: ProductModel[];
  isLoading: boolean = true;

  constructor(private productSvc: ProductsService) {}

  ngAfterViewInit(): void {
    this.productSvc.GetList().subscribe(
      (x) => {
        this.products = x;
      },
      (err) => {
        this.isLoading = false;
      },
      () => (this.isLoading = false)
    );
  }

  ngOnInit(): void {}

}
