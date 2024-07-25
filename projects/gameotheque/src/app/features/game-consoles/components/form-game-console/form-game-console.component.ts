import { Component, inject, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { tap } from 'rxjs';
import { GameConsole } from '../../models';

@Component({
  selector: 'dtbc-form-game-console',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './form-game-console.component.html',
  styleUrl: './form-game-console.component.css'
})
export class FormGameConsoleComponent implements OnInit, OnChanges {
  private readonly formBuilder = inject(FormBuilder)
  toSave = output<GameConsole>()
  item = input.required<GameConsole>()

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

    ngOnChanges(changes: SimpleChanges): void {
      const newItem = changes['item'].currentValue
      this.gameConsoleForm.setValue(newItem)
    }

    ngOnInit(): void {
      console.info('ngOnInit')
      //this.fromDetectChanges$.subscribe()
    }

    submitToSave(): void {
      var result = this.gameConsoleForm.value
      if(result.label && result.version) {
        this.toSave.emit(result as GameConsole) // Attention ici, on ne controle plus si c'est nullable
      }
  }
}
