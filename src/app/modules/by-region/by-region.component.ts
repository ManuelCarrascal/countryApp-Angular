import { Component, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country.interface';
import { CountriesService } from '../../shared/services/countries.service';
import { Region } from '../../shared/interfaces/region.type';

@Component({
  selector: 'app-by-region',
  standalone: false,

  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.scss',
})
export class ByRegionComponent implements OnInit {
  countries: Country[] = [];

  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  selectedRegion?: Region;

  constructor(private readonly countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
