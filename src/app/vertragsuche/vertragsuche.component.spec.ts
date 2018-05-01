import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragsucheComponent } from './vertragsuche.component';

describe('VertragsucheComponent', () => {
  let component: VertragsucheComponent;
  let fixture: ComponentFixture<VertragsucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertragsucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragsucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
