import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGameConsoleComponent } from '../form-game-console/form-game-console.component';

@Component({
  selector: 'dtbc-add-game-console',
  standalone: true,
  imports: [FormGameConsoleComponent],
  templateUrl: './add-game-console.component.html',
  styleUrl: './add-game-console.component.css'
})
export class AddGameConsoleComponent {

}
