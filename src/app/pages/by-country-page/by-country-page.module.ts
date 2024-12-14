import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCountryPageRoutingModule } from './by-country-page-routing.module';
import { ByCountryModule } from '../../modules/by-country/by-country.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ByCountryPageRoutingModule,
    ByCountryModule
  ]
})
export class ByCountryPageModule { }
