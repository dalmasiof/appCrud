import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.css']
})
export class ProductRemoveComponent implements OnInit {

  Product!: ProductModel

  constructor(private actveRoute: ActivatedRoute
    , private prodSvc: ProductsService
    , private route: Router
    , private toastSvc:ToastrService) {
  }

  ngOnInit(): void {
    this.Product = this.actveRoute.snapshot.data['product']
    console.log("delete: " + this.Product)
  }

  removerProd(Id: number) {
    this.prodSvc.Delete(Id).subscribe(
      (x) => {
        this.route.navigate(['Product/list']);
        this.toastSvc.success("Product Deleted");
      }
    );
  }

}
