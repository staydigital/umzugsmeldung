import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragsviewComponent } from './vertragsview.component';

describe('VertragsviewComponent', () => {
  let component: VertragsviewComponent;
  let fixture: ComponentFixture<VertragsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertragsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
