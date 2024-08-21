import { delay, filter, map, Observable, of } from "rxjs";
import { GetAllGames } from "../get-all-video-games.service";
import { VideoGames } from "../../models/video-game";

export const fakeInMemoryGetAllVideoGamesService:GetAllGames = {
  getAll(): Observable<VideoGames> {
    const table: VideoGames = [
      { releaseDate: new Date(2023, 1, 1), label: 'Abe', console: { label: 'test', version: '1', id: 1 } },
      { releaseDate: new Date(2024, 1, 1), label: 'The last of us', console: { label: 'test', version: '1', id: 1 } }
    ]

    return of(table).pipe(
      filter(items => items.length > 0),
      filter(items => {
        const findingItem = items.find(item => item.releaseDate.getFullYear() == new Date().getFullYear())
        return findingItem !== undefined
      }),
      delay(1500),
      map(items => {
        return items.filter(item => item.releaseDate.getFullYear() == new Date().getFullYear())
      })
    )
  }
}
