import { Routes } from "@angular/router";
import { ListGamesComponent } from "./components/list-games/list-games.component";
import { CreateVideoGameComponent } from "./components/create-video-game/create-video-game.component";

export const videoGamesRoutes: Routes = [
  {
    path: '',
    component: ListGamesComponent
  },
  {
    path: 'create',
    component: CreateVideoGameComponent
  }
]
