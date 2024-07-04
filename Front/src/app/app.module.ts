import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgZerroAndModuls } from './DemoNgZerroAndModule';
import { SignupDonneurComponent } from './basic/components/signup-donneur/signup-donneur.component';
import { SignupHopitalComponent } from './basic/components/signup-hopital/signup-hopital.component';
import { SignupAssociationComponent } from './basic/components/signup-association/signup-association.component';
import { SignupBankSangComponent } from './basic/components/signup-bank-sang/signup-bank-sang.component';

import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './basic/components/home/home.component';
import { BackgroundComponent } from './basic/components/background/background.component';
import { SliderComponent } from './basic/components/acceuil/slider/slider/slider.component';
import { EnteteComponent } from './basic/components/acceuil/entete/entete/entete.component';
import { DownloadComponent } from './basic/components/acceuil/download/download/download.component';
import { ContactusComponent } from './basic/components/acceuil/contactus/contactus/contactus.component';
import { AcceuilllComponent } from './basic/components/acceuil/acceuilll/acceuilll/acceuilll.component';
import { AcceuillComponent } from './basic/components/acceuil/acceuill/acceuill/acceuill.component';
import { PiedDePageComponent } from './basic/components/acceuil/pied-de-page/pied-de-page/pied-de-page.component';
import { FooterComponent } from './basic/components/acceuil/footer/footer/footer.component';
import { GoogleMapComponent } from './basic/components/acceuil/google-map/google-map.component';
import { TeamComponent } from './basic/components/acceuil/pied page/team/team.component';
import { BloodComponent } from './basic/components/acceuil/blood/blood.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SignupDonneurComponent,
    SignupHopitalComponent,
    SignupAssociationComponent,
    SignupBankSangComponent,
    HomeComponent,
    BackgroundComponent,
    SliderComponent,
    EnteteComponent,
    DownloadComponent,
    ContactusComponent,
    AcceuilllComponent,
    AcceuillComponent,
    PiedDePageComponent,
    FooterComponent,
    GoogleMapComponent,
    TeamComponent,
    BloodComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZerroAndModuls,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule ,
    MatCardModule 




  
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
