// Import CommonModule
import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
// Import OnInit
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cos214appInputComponent } from 'src/app/cos214app-input/cos214app-input.component';
import { COS214AppButtonComponent } from 'src/app/cos214app-button/cos214app-button.component';
import { UserService } from 'src/app/services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true, // ✅ Added standalone: true
  imports: [
    CommonModule, // ✅ Added CommonModule (for *ngIf)
    FormsModule,
    Cos214appInputComponent,
    COS214AppButtonComponent,
    MatCardModule,
    MatCheckbox,
    ReactiveFormsModule,
    MatFormFieldModule,
    IonicModule,
    RouterLink,
  ],
})
// ✅ Implement OnInit
export class LoginPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  userService = inject(UserService);

  loginForm!: FormGroup; // <-- This will hold your form

  // Inject the FormBuilder
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      // '' is the default value
      // [Validators...] is the list of rules
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
      termsAccepted: [false, [Validators.requiredTrue]], // For your checkbox
    });
  }

  // Helper getters for easier access in the template
  get emailControl() {
    return this.loginForm.get('userEmail');
  }
  get passwordControl() {
    return this.loginForm.get('userPassword');
  }
  get termsControl() {
    return this.loginForm.get('termsAccepted');
  }

  // --- ✅ Updated login method ---
  login() {
    // 1. Check if the form itself is valid before doing anything
    if (this.loginForm.invalid) {
      // Mark fields as touched to show errors
      this.loginForm.markAllAsTouched();
      return;
    } else {
      this.router.navigate(['../dashboard']);
    }

    console.log('Log In data: ', this.loginForm.value);
  }
}
