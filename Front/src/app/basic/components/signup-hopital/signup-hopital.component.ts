import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-hopital',
  templateUrl: './signup-hopital.component.html',
  styleUrls: ['./signup-hopital.component.scss']
})
export class SignupHopitalComponent {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private notification: NzNotificationService,
              private router: Router
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
     
      lieux: [null, [Validators.required]],
      tlf: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      codePeronelHopital: [null, [Validators.required]],
    });
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('Form is valid, submitting', this.validateForm.value);
      this.authService.registerHopital(this.validateForm.value).subscribe(res => {
        this.notification.success(
          'SUCCESS',
          `Signup successful`,
          { nzDuration: 5000 }
        );
        this.router.navigateByUrl('/login');
      }, error => {
        console.error('Error during signup', error);
        this.notification.error(
          'ERROR',
          `${error.error}`,
          { nzDuration: 5000 }
        );
      });
    } else {
      console.warn('Form is invalid');
      for (const i in this.validateForm.controls) {
        if (this.validateForm.controls.hasOwnProperty(i)) {
          this.validateForm.controls[i].markAsDirty();
          this.validateForm.controls[i].updateValueAndValidity();
        }
      }
    }
  }

}
