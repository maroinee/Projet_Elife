import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankSangRoutingModule } from './bank-sang-routing.module';
import { BankSangComponent } from './bank-sang.component';
import { BankSangDashboardComponent } from './pages/bank-sang-dashboard/bank-sang-dashboard.component';


@NgModule({
  declarations: [
    BankSangComponent,
    BankSangDashboardComponent
  ],
  imports: [
    CommonModule,
    BankSangRoutingModule
  ]
})
export class BankSangModule { }
