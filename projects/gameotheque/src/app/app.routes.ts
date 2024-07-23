import { Routes } from '@angular/router';
import { videoGamesRoutes } from './features/games/video-games.routes';
import { MainComponent } from './pages/main/main.component';
import { gameConsolesRoutes } from './features/game-consoles/game-consoles.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  }, {
    path: 'main',
    component: MainComponent
  },
  // ... gamesRoutes
  {
    path: 'video-games',
    children: videoGamesRoutes
    // loadChildren: () => import('./features/games/games.routes').then(item => item.gamesRoutes)
  },
  {
    path: 'game-consoles',
    children: gameConsolesRoutes
  }
];
