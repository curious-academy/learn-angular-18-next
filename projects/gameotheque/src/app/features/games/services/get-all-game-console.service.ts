import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { GetAll } from "../../../core/custom-types";
import { GameConsoles } from "../models/game-console";

export interface GetAllGameConsoles extends GetAll<GameConsoles> {
  getAll(): Observable<GameConsoles>;
}

@Injectable({providedIn:'root'})
export class GetAllGameConsoleService implements GetAllGameConsoles {
  getAll(): Observable<GameConsoles> {
    const array: GameConsoles = [
      {id: 1, label: 'PS 4'},
      {id: 2, label: 'PS 5'},
      {id: 3, label: 'Switch'},
    ]

    return of(array).pipe(delay(1000))
  }

}
