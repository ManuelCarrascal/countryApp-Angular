import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../shared/services/countries.service';
import { Country } from '../../shared/interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  standalone: false,

  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.scss',
})
export class ByCapitalComponent implements OnInit {

  countries : Country[] = [];
  isLoading : boolean = false;
  initialValue: string = '';

  constructor(private readonly countriesService :CountriesService) {}

  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.searchTerm;
  }

  searchByCapital(term: string) {

    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
