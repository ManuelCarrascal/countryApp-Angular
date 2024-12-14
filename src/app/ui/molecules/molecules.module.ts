import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { CountryTableComponent } from './country-table/country-table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    RouterModule
  ],
  exports:[
    CountryTableComponent
  ]
})
export class MoleculesModule { }
