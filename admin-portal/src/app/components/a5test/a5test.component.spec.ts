import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A5testComponent } from './a5test.component';

describe('A5testComponent', () => {
  let component: A5testComponent;
  let fixture: ComponentFixture<A5testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A5testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A5testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
