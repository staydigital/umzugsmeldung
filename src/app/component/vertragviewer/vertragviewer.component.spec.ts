import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragviewerComponent } from './vertragviewer.component';

describe('VertragviewerComponent', () => {
  let component: VertragviewerComponent;
  let fixture: ComponentFixture<VertragviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertragviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
