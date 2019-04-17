import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPayComponent } from './survey-pay.component';

describe('SurveyPayComponent', () => {
  let component: SurveyPayComponent;
  let fixture: ComponentFixture<SurveyPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
