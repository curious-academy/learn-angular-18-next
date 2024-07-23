import { inject, Injectable } from "@angular/core";
import { VideoGame } from "../models/video-game";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SaveOneVideoGameService {
  private readonly http = inject(HttpClient)

  save(item: VideoGame): Observable<VideoGame> {
    return this.http.post<VideoGame>(environment.apis.videoGame, item);
  }
}
