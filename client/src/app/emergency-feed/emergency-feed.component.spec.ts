import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyFeedComponent } from './emergency-feed.component';

describe('EmergencyFeedComponent', () => {
  let component: EmergencyFeedComponent;
  let fixture: ComponentFixture<EmergencyFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
