import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseditorComponent } from './adresseditor.component';

describe('AdresseditorComponent', () => {
  let component: AdresseditorComponent;
  let fixture: ComponentFixture<AdresseditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
