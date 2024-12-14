import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly apiUrl: string = 'https://restcountries.com/v3.1';

  cacheStore: CacheStore = {
    byCapital: {
      countries: [],
      searchTerm: '',
    },

    byCountry: {
      countries: [],
      searchTerm: '',
    },
    byRegion: {
      countries: [],
      region: undefined,
    },
  };

  constructor(private readonly http: HttpClient) {
    this.LoadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private LoadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError((error) => of([])));
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${alphaCode}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${searchTerm}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) => (this.cacheStore.byCapital = { countries, searchTerm })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountry(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchTerm}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) => (this.cacheStore.byCountry = { countries, searchTerm })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byRegion = { countries, region };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }
}
