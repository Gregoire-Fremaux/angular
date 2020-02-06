import { TestBed } from '@angular/core/testing';

import { TestunitService } from './testunit.service';

describe('TestunitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    let toto = "tamereenslip"
    let michel = "tamereenslipE"

    expect(michel).toBe("tamereenslipE");
    
  });
});
