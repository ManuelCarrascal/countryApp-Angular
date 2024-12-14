import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../shared/services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../shared/interfaces/country.interface';

@Component({
  selector: 'app-country',
  standalone: false,

  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent implements OnInit {
  country?: Country | null;

  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) this.router.navigateByUrl('');
        this.country = country;
      });
  }
}
