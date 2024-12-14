import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryComponent } from './by-country.component';
import { AtomsModule } from '../../ui/atoms/atoms.module';
import { MoleculesModule } from '../../ui/molecules/molecules.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ByCountryComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    SharedModule
  ]
})
export class ByCountryModule { }
