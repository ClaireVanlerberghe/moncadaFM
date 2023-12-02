import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JingleComponent } from './jingle.component';

describe('JingleComponent', () => {
  let component: JingleComponent;
  let fixture: ComponentFixture<JingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JingleComponent]
    });
    fixture = TestBed.createComponent(JingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
