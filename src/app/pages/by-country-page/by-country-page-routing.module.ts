import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from '../../modules/by-country/by-country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByCountryPageRoutingModule { }
