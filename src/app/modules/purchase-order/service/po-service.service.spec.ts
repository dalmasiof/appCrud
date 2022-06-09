import { TestBed } from '@angular/core/testing';

import { PoServiceService } from './PurchaseOrder-service';

describe('PoServiceService', () => {
  let service: PoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
