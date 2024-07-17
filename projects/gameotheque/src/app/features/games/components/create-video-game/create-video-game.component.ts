import { Component } from '@angular/core';
import { FormVideoGameComponent } from '../form-video-game/form-video-game.component';
import { VideoGame } from '../../models/video-game';

@Component({
  selector: 'dtbc-create-video-game',
  standalone: true,
  imports: [FormVideoGameComponent],
  templateUrl: './create-video-game.component.html',
  styleUrl: './create-video-game.component.css'
})
export class CreateVideoGameComponent {
  saveOne(item: VideoGame): void {
    console.info('Je save : ', item);
  }
}
