import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseModelVM } from 'src/app/shared/Model/PurchaseOrderVM';
import { PurchaseOrderService } from 'src/app/shared/Services/purchaseOrderService/purchase-order.service';

@Component({
  selector: 'app-info-po',
  templateUrl: './info-po.component.html',
  styleUrls: ['./info-po.component.css']
})
export class InfoPoComponent implements OnInit {
  puchaseOrder: any;
  isEditable: boolean = false;
  isLoading: boolean = true;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  @ViewChild('stepper') private myStepper: MatStepper | undefined;

  constructor(
    private poSvc: PurchaseOrderService,
    private activeRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private toastSvc: ToastrService
  ) {
    let Id = this.activeRoute.snapshot.paramMap.get('Id');
    if (Id) {
      this.poSvc.GetById(parseInt(Id)).subscribe((x) => {
        this.puchaseOrder = x;
        this.isLoading = false
        if (x.statusPO == `Finalized`) {

          this.changeStepper(1)
        } else  if(x.statusPO == `Cancelled`){
        }
        else{
          this.changeStepper(0)
        }
      });
    }
  }

  changeStepper(i: number) {
    debugger
    if(i<0){
      this.myStepper?.reset()
      return
    }
    for (let x = 0; x <= i; x++) {
      this.myStepper?.next();
    }
  }

  ngAfterViewInit(): void {
    
    
  }

  ngOnInit(): void {}

  onBtnDeliveredClick() {
    this.isLoading = true;
    let objToUpdate = Object.assign({}, this.puchaseOrder);
    objToUpdate.statusDelivery = 'Delivered';
    objToUpdate.statusPO = 'Finalized';
    objToUpdate.products = null;
    this.pOUpdate(objToUpdate);
    this.changeStepper(1)

  }

  onBtnCancelClick() {
    this.isLoading = true;
    let objToUpdate = Object.assign({}, this.puchaseOrder);
    objToUpdate.statusDelivery = 'Not delivered';
    objToUpdate.statusPO = 'Cancelled';
    objToUpdate.products = null;
    this.pOUpdate(objToUpdate);

    this.changeStepper(-1)

  }

  pOUpdate(objToUpdate: PurchaseModelVM) {
    this.poSvc.Update(objToUpdate).subscribe(
      (x) => {
        this.puchaseOrder.statusDelivery = x.statusDelivery;
        this.puchaseOrder.statusPO = x.statusPO;
      },
      (err) => {
        this.toastSvc.error('Error to update Po', 'Status: ' + err.status);
        this.isLoading = false;
      },
      () => {
        this.toastSvc.success('Update Po succeful', 'Success');

        this.isLoading = false;
      }
    );
  }

}
