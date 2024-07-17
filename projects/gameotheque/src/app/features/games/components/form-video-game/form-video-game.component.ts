import { Component, output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { VideoGame } from '../../models/video-game';

@Component({
  selector: 'dtbc-form-video-game',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './form-video-game.component.html',
  styleUrl: './form-video-game.component.css'
})
export class FormVideoGameComponent {
  saveItem = output<VideoGame>()
  item: VideoGame = {nom: '', releaseDate: new Date()}

  submitToSave(): void {
    this.saveItem.emit(this.item)
  }
}
