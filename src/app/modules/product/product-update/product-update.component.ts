import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { utilsBr } from 'js-brasil';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/shared/Model/ProductModel';
import { NumberService } from 'src/app/shared/Services/Number/number.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  cadForm!:FormGroup
  errorMesageRequired: string = "Please input something..."
  MASKS = utilsBr.MASKS;

  constructor(private fb:FormBuilder
    , private productService:ProductsService
    , private toasterService:ToastrService
    , private numberService:NumberService
    , private route:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let ProdObj = this.activateRoute.snapshot.data["product"];
    this.cadForm = this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      value:['',Validators.required]

  })

  this.cadForm.patchValue(ProdObj);

  }

  onFormSubmit(){
    
    let prodToUpdate:ProductModel

    prodToUpdate = Object.assign({},this.cadForm.value);
    prodToUpdate.value = this.numberService.convertNumberToNetCore(prodToUpdate.value.toString());
    
    this.productService.Update(prodToUpdate).subscribe(
      (x)=>{
        this.toasterService.success("Product Updated");
        this.route.navigate(["/Product/list"])
      },
      (y)=>{
        this.toasterService.error("Error on create Product: "+y);
      }
    );
  }


}
