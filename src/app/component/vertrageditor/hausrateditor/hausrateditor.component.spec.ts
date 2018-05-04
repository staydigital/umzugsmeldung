import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HausrateditorComponent } from './hausrateditor.component';

describe('HausrateditorComponent', () => {
  let component: HausrateditorComponent;
  let fixture: ComponentFixture<HausrateditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HausrateditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HausrateditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
