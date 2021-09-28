import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosusuarioComponent } from './comentariosusuario.component';

describe('ComentariosusuarioComponent', () => {
  let component: ComentariosusuarioComponent;
  let fixture: ComponentFixture<ComentariosusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
