import { Component, output, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { VideoGame } from '../../models/video-game';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import 'moment/locale/fr';

@Component({
  selector: 'dtbc-form-video-game',
  standalone: true,
  imports: [FormsModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './form-video-game.component.html',
  styleUrl: './form-video-game.component.css',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    provideMomentDateAdapter(),
  ]
})
export class FormVideoGameComponent {
  inputIcon = signal('sentiment_very_satisfied')

  saveItem = output<VideoGame>()
  item: VideoGame = {nom: 'Test jeu video', releaseDate: new Date()}

  submitToSave(): void {
    this.saveItem.emit(this.item)
  }
}
