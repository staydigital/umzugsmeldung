import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnviewComponent } from './vnview.component';

describe('VnviewComponent', () => {
  let component: VnviewComponent;
  let fixture: ComponentFixture<VnviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
