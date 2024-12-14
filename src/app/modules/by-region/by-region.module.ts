import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByRegionComponent } from './by-region.component';
import { AtomsModule } from '../../ui/atoms/atoms.module';
import { MoleculesModule } from '../../ui/molecules/molecules.module';

@NgModule({
  declarations: [ByRegionComponent],
  imports: [CommonModule,
    AtomsModule,
    MoleculesModule
  ],
})
export class ByRegionModule {}
