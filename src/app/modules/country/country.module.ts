import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';

@NgModule({
  declarations: [CountryComponent],
  imports: [CommonModule],
  exports: [CountryComponent],
})
export class CountryModule {}
