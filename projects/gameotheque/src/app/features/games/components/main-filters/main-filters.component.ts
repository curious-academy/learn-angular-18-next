import { Component } from '@angular/core';
import { SelectPeopleComponent } from '../../../../shared/components/people/select-people/select-people.component';

@Component({
  selector: 'dtbc-main-filters',
  standalone: true,
  imports: [SelectPeopleComponent],
  templateUrl: './main-filters.component.html',
  styleUrl: './main-filters.component.css'
})
export class MainFiltersComponent {

}
