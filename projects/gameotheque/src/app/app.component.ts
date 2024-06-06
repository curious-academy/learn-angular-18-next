import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListGamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gameotheque';
}
