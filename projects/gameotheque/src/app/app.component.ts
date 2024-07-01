import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';
import { LearningWhatAboutRxjsComponent } from './learning-what-about-rxjs/learning-what-about-rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListGamesComponent, LearningWhatAboutRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('gameotheque');
}
