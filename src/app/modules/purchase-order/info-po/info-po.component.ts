import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PurchaseOrderService } from '../service/PurchaseOrder-service';

@Component({
  selector: 'app-info-po',
  templateUrl: './info-po.component.html',
  styleUrls: ['./info-po.component.css']
})
export class InfoPoComponent implements OnInit {

  constructor(private poSvc:PurchaseOrderService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let Id = this.activeRoute.snapshot.paramMap.get('Id');
    if(Id){

      this.poSvc.GetById(parseInt(Id)).subscribe((x)=>{
        console.log(x)
      })
    }
    

  }

}
