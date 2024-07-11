import { Routes } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';
import { MainComponent } from './pages/main/main.component';
import { gamesRoutes } from './features/games/games.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  }, {
    path: 'main',
    component: MainComponent
  },
  ... gamesRoutes

];
