import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRoutingModule } from './association-routing.module';
import { AssociationComponent } from './association.component';
import { AssociationDashboardComponent } from './pages/association-dashboard/association-dashboard.component';


@NgModule({
  declarations: [
    AssociationComponent,
    AssociationDashboardComponent
  ],
  imports: [
    CommonModule,
    AssociationRoutingModule
  ]
})
export class AssociationModule { }
