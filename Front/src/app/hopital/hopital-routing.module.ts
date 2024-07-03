import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HopitalComponent } from './hopital.component';
import { HopitalDashboardComponent } from './pages/hopital-dashboard/hopital-dashboard.component';

const routes: Routes = [{ path: '', component: HopitalComponent },
  { path: 'hopital-dashboard', component: HopitalDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HopitalRoutingModule { }
