import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankSangComponent } from './bank-sang.component';

const routes: Routes = [{ path: '', component: BankSangComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankSangRoutingModule { }
