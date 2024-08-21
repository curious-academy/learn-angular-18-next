import { Component, inject, output, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { VideoGame } from '../../models/video-game';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import 'moment/locale/fr';
import { GetAllGameConsoleService } from '../../services/get-all-game-console.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dtbc-form-video-game',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './form-video-game.component.html',
  styleUrl: './form-video-game.component.css',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    provideMomentDateAdapter(),
  ]
})
export class FormVideoGameComponent {
  private consoleService = inject(GetAllGameConsoleService)
  inputIcon = signal('sentiment_very_satisfied')

  saveItem = output<VideoGame>()
  item: VideoGame = {label: '', releaseDate: new Date(), console: { label: '', version: '', id: 0 }}
  consoles$$ = toSignal(this.consoleService.getAll())

  submitToSave(): void {
    console.info(this.item)
    this.saveItem.emit(this.item)
  }
}
