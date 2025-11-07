import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cos214appInputComponent } from 'src/app/cos214app-input/cos214app-input.component';
import { COS214AppButtonComponent } from 'src/app/cos214app-button/cos214app-button.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon'; // Needed for social icons
import { MatButtonModule } from '@angular/material/button'; // Needed for social buttons
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    Cos214appInputComponent,
    COS214AppButtonComponent,
    MatCardModule,
    MatCheckbox,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
})
export class SignupPage implements OnInit {
  signupForm!: FormGroup; // Use ! to assert initialization

  // Inject FormBuilder
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
      termsAccepted: [false, [Validators.requiredTrue]],
    });
  }

  // Helper getters for the template
  get nameControl() {
    return this.signupForm.get('userName');
  }
  get emailControl() {
    return this.signupForm.get('userEmail');
  }
  get passwordControl() {
    return this.signupForm.get('userPassword');
  }
  get termsControl() {
    return this.signupForm.get('termsAccepted');
  }

  signup() {
    console.log('Test');
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched(); // Show errors if not touched
      return;
    }

    // Form is valid, proceed with sign up logic
    console.log('Sign up data:', this.signupForm.value);
    // e.g., this.userService.register(this.signupForm.value);
  }
}
