import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertrageditorComponent } from './vertrageditor.component';

describe('VertrageditorComponent', () => {
  let component: VertrageditorComponent;
  let fixture: ComponentFixture<VertrageditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertrageditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertrageditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
