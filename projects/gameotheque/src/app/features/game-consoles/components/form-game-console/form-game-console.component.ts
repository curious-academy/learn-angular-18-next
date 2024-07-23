import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { tap } from 'rxjs';

@Component({
  selector: 'dtbc-form-game-console',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './form-game-console.component.html',
  styleUrl: './form-game-console.component.css'
})
export class FormGameConsoleComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder)

  // gameConsoleForm = this.formBuilder.group<GameConsole>({
    //   label: '',
    //   version: ''
    // })
    gameConsoleForm = this.formBuilder.group({
      label: ['', [Validators.required, Validators.minLength(3)]],
      version: ['']
    })

    private fromDetectChanges$ = this.gameConsoleForm.valueChanges.pipe(
      tap(item => console.info('changement', item))
    )

    ngOnInit(): void {
      this.fromDetectChanges$.subscribe()
    }

    submitToSave(): void {
      var result = this.gameConsoleForm.value
    console.info(result)
  }
}
