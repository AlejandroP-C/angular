import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacetrackDetailComponent } from './racetrack-detail.component';

describe('RacetrackDetailComponent', () => {
  let component: RacetrackDetailComponent;
  let fixture: ComponentFixture<RacetrackDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacetrackDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacetrackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
