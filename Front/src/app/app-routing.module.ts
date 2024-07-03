import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './basic/components/signup/signup.component';
import { SignupDonneurComponent } from './basic/components/signup-donneur/signup-donneur.component';
import { SignupHopitalComponent } from './basic/components/signup-hopital/signup-hopital.component';
import { SignupAssociationComponent } from './basic/components/signup-association/signup-association.component';
import { LoginComponent } from './basic/components/login/login.component';
import { ViewAlComponent } from './donneur/pages/viewAll/view-al/view-al.component';
import { CreatePostComponent } from './donneur/pages/create-post/create-post.component';
import { ViewComponent } from './donneur/pages/viewPost/view/view.component';
import { HomeComponent } from './basic/components/home/home.component';
import { BackgroundComponent } from './basic/components/background/background.component';
import { AcceuillComponent } from './basic/components/acceuil/acceuill/acceuill/acceuill.component';
import { AcceuilllComponent } from './basic/components/acceuil/acceuilll/acceuilll/acceuilll.component';
import { ContactusComponent } from './basic/components/acceuil/contactus/contactus/contactus.component';
import { DownloadComponent } from './basic/components/acceuil/download/download/download.component';
import { EnteteComponent } from './basic/components/acceuil/entete/entete/entete.component';
import { PiedDePageComponent } from './basic/components/acceuil/pied-de-page/pied-de-page/pied-de-page.component';
import { SliderComponent } from './basic/components/acceuil/slider/slider/slider.component';
import { FooterComponent } from './basic/components/acceuil/footer/footer/footer.component';
import { GoogleMapComponent } from './basic/components/acceuil/google-map/google-map.component';
import { TeamComponent } from './basic/components/acceuil/pied page/team/team.component';
import { BloodComponent } from './basic/components/acceuil/blood/blood.component';
import { SearchByNameComponent } from './donneur/pages/search/search.component';

const routes: Routes = [
  { path: 'signup-donneur', component: SignupDonneurComponent },
  { path: 'signup-hopital', component: SignupHopitalComponent },
  { path: 'signup-association', component: SignupAssociationComponent },
  { path: 'signup-bank-sang', component: SignupAssociationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'hopital', loadChildren: () => import('./hopital/hopital.module').then(m => m.HopitalModule) },
  { path: 'donneur', loadChildren: () => import('./donneur/donneur.module').then(m => m.DonneurModule) },
  { path: 'association', loadChildren: () => import('./association/association.module').then(m => m.AssociationModule) },
  { path: 'bankSang', loadChildren: () => import('./bank-sang/bank-sang.module').then(m => m.BankSangModule) },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-al', component: ViewAlComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'home', component: HomeComponent},
  { path: 'background', component: BackgroundComponent},
  { path: '', redirectTo: '/donneur', pathMatch: 'full' },
  { path: 'acceuill', component: AcceuillComponent},  
  { path: 'acceuilll', component: AcceuilllComponent},  
  { path: 'contactus', component: ContactusComponent},  
  { path: 'download', component: DownloadComponent},  
  { path: 'entete', component: EnteteComponent},  
  { path: 'pied-de-page', component: PiedDePageComponent},  
  { path: 'slider', component: SliderComponent},  
  { path: 'acceuill', component: AcceuillComponent},  
  { path: 'acceuilll', component: AcceuilllComponent},  
  { path: 'entete', component: EnteteComponent},  
  { path: 'pied-de-page', component: PiedDePageComponent},  
  { path: 'footer', component: FooterComponent},  
  { path: 'google', component: GoogleMapComponent},  
  { path: 'team', component: TeamComponent},  
  { path: 'blood', component: BloodComponent},  
  { path: 'search', component: SearchByNameComponent},  
    

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
