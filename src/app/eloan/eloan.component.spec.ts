import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloanComponent } from './eloan.component';

describe('EloanComponent', () => {
  let component: EloanComponent;
  let fixture: ComponentFixture<EloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
