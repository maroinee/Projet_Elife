import { Component } from '@angular/core';
import { UserStorageService } from './basic/services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front';

  isDonneurLoggedIn: boolean= UserStorageService.isDonneurLoggedIn();
  isHopitalLoggedIn: boolean= UserStorageService.isHopitalLoggedIn();
  isAssociationLoggedIn: boolean= UserStorageService.isAssociationLoggedIn();
  isBankSangLoggedIn: boolean= UserStorageService.isBankSangLoggedIn();

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe(event =>{
      this.isDonneurLoggedIn=UserStorageService.isDonneurLoggedIn();
      this.isHopitalLoggedIn=UserStorageService.isHopitalLoggedIn();
      this.isAssociationLoggedIn=UserStorageService.isAssociationLoggedIn();
      this.isBankSangLoggedIn=UserStorageService.isBankSangLoggedIn();
    })
  }

   logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
   }


}
