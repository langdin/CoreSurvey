import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeSurveyDetailComponent } from './take-survey-detail.component';

describe('TakeSurveyDetailComponent', () => {
  let component: TakeSurveyDetailComponent;
  let fixture: ComponentFixture<TakeSurveyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeSurveyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeSurveyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
