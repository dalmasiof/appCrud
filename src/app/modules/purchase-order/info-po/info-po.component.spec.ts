import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPoComponent } from './info-po.component';

describe('InfoPoComponent', () => {
  let component: InfoPoComponent;
  let fixture: ComponentFixture<InfoPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
