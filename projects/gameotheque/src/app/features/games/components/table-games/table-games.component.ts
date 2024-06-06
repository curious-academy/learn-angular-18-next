import { Component, EventEmitter, Input, input, output } from '@angular/core';
import { VideoGame } from '../../models/video-game';

@Component({
  selector: 'dtbc-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.css'
})
export class TableGamesComponent {
  items = input.required<VideoGame[]>();
  title = input<string>('');
  toCreate = output<void>();
  //@Output() toCreate = new EventEmitter<void>()



  clickToAddNewVideoGame(): void {
    this.toCreate.emit();
  }
}
