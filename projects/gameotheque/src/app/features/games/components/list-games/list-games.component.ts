import { Component, signal } from '@angular/core';
import { VideoGame } from '../../models/video-game';
import { TableGamesComponent } from '../table-games/table-games.component';
import { CreateVideoGameComponent } from '../create-video-game/create-video-game.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [TableGamesComponent, CreateVideoGameComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {
  readyToCreate = signal<boolean>(false);
  // videoGameList: VideoGame[] = []

  videoGameList: VideoGame[] = [
    { dateSortie: new Date(),
      nom: 'Final fantasy 7'
    },
    { dateSortie: new Date(),
      nom: 'Abe'
    },
    { dateSortie: new Date(),
      nom: 'Raise of Tomb Raider'
    }
  ];

  prepareCreation(): void {
    this.readyToCreate.set(true);
  }
}
