import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from 'src/app/core/stores/cart.store';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

import { ListProductsComponent } from './list-products.component';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsComponent ],
      providers:[Store]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
