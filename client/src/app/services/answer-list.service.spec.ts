import { TestBed } from '@angular/core/testing';

import { AnswerListService } from './answer-list.service';

describe('AnswerListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnswerListService = TestBed.get(AnswerListService);
    expect(service).toBeTruthy();
  });
});
