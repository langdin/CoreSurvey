import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfoDetailsComponent } from './my-info-details.component';

describe('MyInfoDetailsComponent', () => {
  let component: MyInfoDetailsComponent;
  let fixture: ComponentFixture<MyInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
