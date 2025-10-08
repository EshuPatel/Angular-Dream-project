import { TestBed } from '@angular/core/testing';

import { MyusersService } from './myusers.service';

describe('MyusersService', () => {
  let service: MyusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
