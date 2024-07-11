import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';
import { LearningWhatAboutRxjsComponent } from './learning-what-about-rxjs/learning-what-about-rxjs.component';
import { MainMenuComponent } from './shared/ui/menus/main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('gameotheque');
}
