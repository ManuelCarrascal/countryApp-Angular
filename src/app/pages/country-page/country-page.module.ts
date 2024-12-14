import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryPageRoutingModule } from './country-page-routing.module';
import { CountryModule } from '../../modules/country/country.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountryPageRoutingModule,
    CountryModule
  ]
})
export class CountryPageModule { }
