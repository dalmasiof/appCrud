import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreService } from 'src/app/shared/Services/stores/loggedStore.service';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

import { ListProductsComponent } from './list-products.component';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsComponent ],
      providers:[StoreService]
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
