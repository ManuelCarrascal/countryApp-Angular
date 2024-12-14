import { Component, Input } from '@angular/core';
import { Country } from '../../../shared/interfaces/country.interface';

@Component({
  selector: 'countries-table',
  standalone: false,

  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss',
})
export class CountryTableComponent {
  @Input()
  countries: Country[] = [];
}
