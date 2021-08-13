import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosusuarioComponent } from './articulosusuario.component';

describe('ArticulosusuarioComponent', () => {
  let component: ArticulosusuarioComponent;
  let fixture: ComponentFixture<ArticulosusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
