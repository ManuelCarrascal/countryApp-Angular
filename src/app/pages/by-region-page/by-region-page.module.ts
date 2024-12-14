import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByRegionPageRoutingModule } from './by-region-page-routing.module';
import { ByRegionModule } from '../../modules/by-region/by-region.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ByRegionPageRoutingModule,
    ByRegionModule
  ]
})
export class ByRegionPageModule { }
