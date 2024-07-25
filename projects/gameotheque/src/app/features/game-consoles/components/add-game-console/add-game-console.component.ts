import { Component, inject, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { GameConsole } from '../../models';
import { AddOneGameConsoleService } from '../../services/add-one-game-console.service';
import { FormGameConsoleComponent } from '../form-game-console/form-game-console.component';
import { StatePanel } from '../../../../core/custom-types';
@Component({
  selector: 'dtbc-add-game-console',
  standalone: true,
  imports: [FormGameConsoleComponent, MatProgressSpinnerModule],
  templateUrl: './add-game-console.component.html',
  styleUrl: './add-game-console.component.css'
})
export class AddGameConsoleComponent {
  private readonly business = inject(AddOneGameConsoleService)
  private readonly snackbar = inject(MatSnackBar)
  isSaving = signal(false)
  newItem: GameConsole = { label: '', version: '' }

  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', { duration: 1000, panelClass: cssClass })
  }

  createOne(item: GameConsole): void {
    this.isSaving.set(true)
    this.business.add(item).subscribe({
      next: item => {
        this.openSnack('Sauvegarde réussie !', 'success')
        this.isSaving.set(false)
        this.newItem = { label: '', version: ''}
      },
      error: err => {
        this.openSnack('Oops prob lors de la sauvegarde', 'failed')
        this.isSaving.set(false)
      }
    })
  }
}
