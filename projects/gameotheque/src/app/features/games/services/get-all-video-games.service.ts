import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoGames } from '../models/video-game';
import { GetAll } from '../../../core/custom-types';
import { fakeInMemoryGetAllVideoGamesService } from './fakes';
import { environment } from '../../../../environments/environment';

export interface GetAllGames extends GetAll<VideoGames> {
  getAll(): Observable<VideoGames>;
}

@Injectable({
  providedIn: 'root',
  // useValue: fakeInMemoryGetAllVideoGamesService
  // useFactory: () => environment.isProduction ? new GetAllVideoGamesService() : fakeInMemoryGetAllVideoGamesService
  useFactory: () => ! isDevMode() ? new GetAllVideoGamesService() : fakeInMemoryGetAllVideoGamesService
})
export class GetAllVideoGamesService implements GetAllGames {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<VideoGames> {
    throw new Error('Method not implemented.')
  }


}
