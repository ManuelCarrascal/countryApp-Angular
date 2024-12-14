import { Component, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country.interface';
import { CountriesService } from '../../shared/services/countries.service';

@Component({
  selector: 'app-by-country',
  standalone: false,

  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.scss',
})
export class ByCountryComponent implements OnInit {
  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';

  constructor(private readonly countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.searchTerm;
  }

  searchByCountry(searchTerm: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(searchTerm).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
