import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DonneurRoutingModule } from './donneur-routing.module';
import { DonneurComponent } from './donneur.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { DonneurDashboardComponent } from './pages/donneur-dashboard/donneur-dashboard.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAlComponent } from './pages/viewAll/view-al/view-al.component';
import { ViewComponent } from './pages/viewPost/view/view.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import {  SearchByNameComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { MatGridListModule } from '@angular/material/grid-list';




@NgModule({
  declarations: [
    DonneurComponent,
    CreatePostComponent,
    DonneurDashboardComponent,
    ViewAlComponent,
    ViewComponent,
    SearchByNameComponent,
  ],
  imports: [
    CommonModule,
    DonneurRoutingModule,
    ReactiveFormsModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzMessageModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule ,
    BrowserModule,
    FormsModule,
    MatCardModule ,
    MatGridListModule
    
  ]
})
export class DonneurModule { }
