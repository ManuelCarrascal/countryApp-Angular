import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  countries: Country[];
  searchTerm: string;
}

export interface RegionCountries {
  region?: Region;
  countries: Country[];
}
