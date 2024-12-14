import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalPageRoutingModule } from './by-capital-page-routing.module';
import { ByCapitalModule } from '../../modules/by-capital/by-capital.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ByCapitalPageRoutingModule,
    ByCapitalModule
  ]
})
export class ByCapitalPageModule { }
