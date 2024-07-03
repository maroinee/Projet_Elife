import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HopitalRoutingModule } from './hopital-routing.module';
import { HopitalComponent } from './hopital.component';
import { HopitalDashboardComponent } from './pages/hopital-dashboard/hopital-dashboard.component';


@NgModule({
  declarations: [
    HopitalComponent,
    HopitalDashboardComponent
  ],
  imports: [
    CommonModule,
    HopitalRoutingModule
  ]
})
export class HopitalModule { }
