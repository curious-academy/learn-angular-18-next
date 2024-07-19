import { inject, Injectable } from "@angular/core";
import { VideoGame } from "../models/video-game";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SaveOneVideoGameService {
  private readonly http = inject(HttpClient)

  save(item: VideoGame): Observable<VideoGame> {
    return this.http.post<VideoGame>('https://localhost:7269/api/Videogame', item);
  }
}
