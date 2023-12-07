import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMusicComponent } from './next-music.component';

describe('NextMusicComponent', () => {
  let component: NextMusicComponent;
  let fixture: ComponentFixture<NextMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextMusicComponent]
    });
    fixture = TestBed.createComponent(NextMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
