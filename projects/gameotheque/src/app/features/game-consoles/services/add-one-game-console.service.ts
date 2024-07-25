import { inject, Injectable } from "@angular/core";
import { GameConsole } from "../models";
import { delay, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
  useValue: {
    add(item: GameConsole) : Observable<GameConsole> {
      item.id = Math.random()
      return of(item).pipe(delay(1500))
    }
  }
})
export class AddOneGameConsoleService {
  private readonly http = inject(HttpClient)

  add(item: GameConsole) : Observable<GameConsole> {
    return this.http.post<GameConsole>(environment.apis.gameConsole, item);
  }
}
