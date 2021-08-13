import { TestBed } from '@angular/core/testing';

import { ArticuloauditoriaService } from './articuloauditoria.service';

describe('ArticuloauditoriaService', () => {
  let service: ArticuloauditoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuloauditoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
