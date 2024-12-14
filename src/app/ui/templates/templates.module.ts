import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateComponent } from './main-template/main-template.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MainTemplateComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MainTemplateComponent
  ]
})
export class TemplatesModule { }
