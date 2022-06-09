import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoComponent } from './list-po.component';

describe('ListPoComponent', () => {
  let component: ListPoComponent;
  let fixture: ComponentFixture<ListPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
