import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MatCardModule,
    MatCheckbox,
    RouterLink,
  ],
})
export class LoginPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  userService = inject(UserService);

  loginForm!: FormGroup;
  hidePassword: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    addIcons({
      'eye-outline': eyeOutline,
      'eye-off-outline': eyeOffOutline,
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
      termsAccepted: [false, [Validators.requiredTrue]],
    });
  }

  get emailControl() {
    return this.loginForm.get('userEmail');
  }
  get passwordControl() {
    return this.loginForm.get('userPassword');
  }
  get termsControl() {
    return this.loginForm.get('termsAccepted');
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((field) => {
        const control = this.loginForm.get(field);
        if (control && !control.touched) {
          control.markAsTouched({ onlySelf: true });
        }
      });
      return;
    }

    console.log('Log In data:', this.loginForm.value);
    this.router.navigate(['../dashboard']);
  }
}
