import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './by-capital.component';
import { AtomsModule } from "../../ui/atoms/atoms.module";
import { MoleculesModule } from '../../ui/molecules/molecules.module';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [ByCapitalComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    SharedModule
]
})
export class ByCapitalModule { }
