import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloseliminadosComponent } from './articuloseliminados.component';

describe('ArticuloseliminadosComponent', () => {
  let component: ArticuloseliminadosComponent;
  let fixture: ComponentFixture<ArticuloseliminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloseliminadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloseliminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
