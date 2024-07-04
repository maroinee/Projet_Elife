import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm() {
   this.authService.login(this.validateForm.get(['userName'])!.value, this.validateForm.get(['password'])!.value)
   .subscribe(res=>{
    console.log(res);
    if (UserStorageService.isDonneurLoggedIn) {
      this.router.navigateByUrl('/create-post')
    }else if (UserStorageService.isHopitalLoggedIn) {
      this.router.navigateByUrl('/hopital-dashboard')
    }else if (UserStorageService.isAssociationLoggedIn) {
      this.router.navigateByUrl('/association-dashboard')
    }else if (UserStorageService.isBankSangLoggedIn) {
      this.router.navigateByUrl('/bank-sang-dashboard')
    }
   }, error =>{
    this.notification
    .error(
      'ERROR',
      `Bad crendentials`,
      {nzDuration: 5000}
    );
   });
}
}
