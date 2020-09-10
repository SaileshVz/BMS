import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhloanComponent } from './phloan.component';

describe('PhloanComponent', () => {
  let component: PhloanComponent;
  let fixture: ComponentFixture<PhloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
