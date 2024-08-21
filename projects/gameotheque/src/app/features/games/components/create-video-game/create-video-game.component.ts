import { Component, inject, signal } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormVideoGameComponent } from '../form-video-game/form-video-game.component';
import { VideoGame } from '../../models/video-game';
import { SaveOneVideoGameService } from '../../services/save-one-video-game.service';

import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { StatePanel } from '../../../../core/custom-types';

@Component({
  selector: 'dtbc-create-video-game',
  standalone: true,
  imports: [FormVideoGameComponent, MatProgressSpinnerModule],
  templateUrl: './create-video-game.component.html',
  styleUrl: './create-video-game.component.css'
})
export class CreateVideoGameComponent {
  private readonly service = inject(SaveOneVideoGameService)
  private readonly snackbar = inject(MatSnackBar)
  isSaving = signal(false);

  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', { duration: 1000, panelClass: cssClass })
  }

  saveOne(item: VideoGame): void {
    this.isSaving.set(true)
    this.service.save(item).subscribe({
      next: savedVideoGame => {
        this.openSnack('Sauvegarde réussie !', 'success')
        this.isSaving.set(false)
      },
      error: err => {
        this.openSnack('Oops prob lors de la sauvegarde', 'failed')
        this.isSaving.set(false)
      }
    })
  }
}
