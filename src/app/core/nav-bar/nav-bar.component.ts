import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { ListProductsComponent } from 'src/app/modules/cart/list-products/list-products.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ListProductsComponent);

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
