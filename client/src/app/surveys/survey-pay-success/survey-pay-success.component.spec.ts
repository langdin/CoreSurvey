import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPaySuccessComponent } from './survey-pay-success.component';

describe('SurveyPaySuccessComponent', () => {
  let component: SurveyPaySuccessComponent;
  let fixture: ComponentFixture<SurveyPaySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPaySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPaySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
