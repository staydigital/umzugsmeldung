import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressviewerComponent } from './adressviewer.component';

describe('AdressviewerComponent', () => {
  let component: AdressviewerComponent;
  let fixture: ComponentFixture<AdressviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
