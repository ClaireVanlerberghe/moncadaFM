import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakButtonComponent } from './speak-button.component';

describe('SpeakButtonComponent', () => {
  let component: SpeakButtonComponent;
  let fixture: ComponentFixture<SpeakButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakButtonComponent]
    });
    fixture = TestBed.createComponent(SpeakButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
