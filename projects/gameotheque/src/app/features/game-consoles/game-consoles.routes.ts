import { Routes } from "@angular/router";
import { AddGameConsoleComponent } from "./components/add-game-console/add-game-console.component";

export const gameConsolesRoutes: Routes = [
  {
    path: 'create',
    component: AddGameConsoleComponent
  }
]
