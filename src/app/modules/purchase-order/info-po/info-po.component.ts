import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseModelVM } from 'src/app/shared/Model/PurchaseModelVM';
import { PurchaseOrderService } from '../service/PurchaseOrder-service';

@Component({
  selector: 'app-info-po',
  templateUrl: './info-po.component.html',
  styleUrls: ['./info-po.component.css']
})
export class InfoPoComponent implements OnInit {
  puchaseOrder?:PurchaseModelVM

  constructor(private poSvc:PurchaseOrderService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let Id = this.activeRoute.snapshot.paramMap.get('Id');
    if(Id){
      this.poSvc.GetById(parseInt(Id)).subscribe((x)=>{
        this.puchaseOrder = x
      })
    }
    

  }

}
