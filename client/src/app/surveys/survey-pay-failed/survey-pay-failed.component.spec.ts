import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPayFailedComponent } from './survey-pay-failed.component';

describe('SurveyPayFailedComponent', () => {
  let component: SurveyPayFailedComponent;
  let fixture: ComponentFixture<SurveyPayFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPayFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPayFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
