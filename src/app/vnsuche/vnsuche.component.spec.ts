import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnsucheComponent } from './vnsuche.component';

describe('VnsucheComponent', () => {
  let component: VnsucheComponent;
  let fixture: ComponentFixture<VnsucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnsucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnsucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
