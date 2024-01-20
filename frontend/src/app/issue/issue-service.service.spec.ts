import { TestBed } from '@angular/core/testing';

import { IssueServiceService } from './issue-service.service';

describe('IssueServiceService', () => {
  let service: IssueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
