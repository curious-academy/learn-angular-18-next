import { TestBed } from '@angular/core/testing';

import { GetAllVideoGamesService } from './get-all-video-games.service';

describe('GetAllVideoGamesService', () => {
  let service: GetAllVideoGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllVideoGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
