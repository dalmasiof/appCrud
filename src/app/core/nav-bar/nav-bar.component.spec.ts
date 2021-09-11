import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ListProductsComponent } from 'src/app/modules/cart/list-products/list-products.component';

import { NavBarComponent } from './nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '../stores/cart.store';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports:[
        MatDialogModule,
        MatMenuModule,
        BrowserAnimationsModule,
      ],
      providers:[
        Store
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open cart dialog',()=>{
    expect(component.openDialog).toBeTruthy();
  })
});
