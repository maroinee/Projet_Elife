import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonneurComponent } from './donneur.component';
import { DonneurDashboardComponent } from './pages/donneur-dashboard/donneur-dashboard.component';
import { SignupComponent } from '../basic/components/signup/signup.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAlComponent } from './pages/viewAll/view-al/view-al.component';
import { ViewComponent } from './pages/viewPost/view/view.component';
import { SearchByNameComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: DonneurComponent },
  { path: 'donneur-dashboard', component: DonneurDashboardComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'signup-donneur', component: SignupComponent },
  { path: 'view-all', component: ViewAlComponent },
  { path: 'search', component: SearchByNameComponent },
  { path: 'view/:id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonneurRoutingModule { }
