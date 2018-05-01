import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VorgaengeComponent } from './vorgaenge.component';

describe('VorgaengeComponent', () => {
  let component: VorgaengeComponent;
  let fixture: ComponentFixture<VorgaengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VorgaengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VorgaengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
