import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderrentComponent } from './headerrent.component';

describe('HeaderrentComponent', () => {
  let component: HeaderrentComponent;
  let fixture: ComponentFixture<HeaderrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
