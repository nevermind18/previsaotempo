import { TestBed } from '@angular/core/testing';

import { PrevisaotempoService } from './previsaotempo.service';

describe('PrevisaotempoService', () => {
  let service: PrevisaotempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevisaotempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
