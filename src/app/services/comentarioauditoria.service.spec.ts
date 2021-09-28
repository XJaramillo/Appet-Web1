import { TestBed } from '@angular/core/testing';

import { ComentarioauditoriaService } from './comentarioauditoria.service';

describe('ComentarioauditoriaService', () => {
  let service: ComentarioauditoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentarioauditoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
