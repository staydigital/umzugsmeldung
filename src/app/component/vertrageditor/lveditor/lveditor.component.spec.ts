import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LveditorComponent } from './lveditor.component';

describe('LveditorComponent', () => {
  let component: LveditorComponent;
  let fixture: ComponentFixture<LveditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LveditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LveditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
