import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfzeditorComponent } from './kfzeditor.component';

describe('KfzeditorComponent', () => {
  let component: KfzeditorComponent;
  let fixture: ComponentFixture<KfzeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfzeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfzeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
