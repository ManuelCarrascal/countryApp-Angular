import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './ui/templates/main-template/main-template.component';

const routes: Routes = [
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'by-capital',
      },
      {
        path: 'by-capital',
        loadChildren: () =>
          import('./pages/by-capital-page/by-capital-page.module').then(
            (m) => m.ByCapitalPageModule
          ),
      },
      {
        path: 'by-country',
        loadChildren: () =>
          import('./pages/by-country-page/by-country-page.module').then(
            (m) => m.ByCountryPageModule
          ),
      },
      {
        path: 'by-region',
        loadChildren: () =>
          import('./pages/by-region-page/by-region-page.module').then(
            (m) => m.ByRegionPageModule
          ),
      },
      {
        path: 'countries/by/:id',
        loadChildren: () =>
          import('./pages/country-page/country-page.module').then(
            (m) => m.CountryPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
