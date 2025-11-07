import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  FormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR, // Import the necessary form utilities
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
// 2. Import the specific icons you need
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'cos214app-input',
  templateUrl: './cos214app-input.component.html',
  styleUrls: ['./cos214app-input.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  providers: [
    {
      // Register the component as a ControlValueAccessor
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Cos214appInputComponent),
      multi: true,
    },
  ],
})
export class Cos214appInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';

  hidePassword: boolean = true;
  isDisabled: boolean = false;

  constructor() {
    addIcons({
      'eye-outline': eyeOutline,
      'eye-off-outline': eyeOffOutline,
    });
  }

  // This is the internal value of the component
  private _value: string = '';

  // --- Getter/Setter for the value ---
  // This wires the template's [(ngModel)] to our accessor methods
  get value(): string {
    return this._value;
  }

  set value(val: string) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(this._value); // Notify the parent (ngModel) of the change
      this.onTouched(); // Mark as touched
    }
  }

  // --- Placeholder functions for Angular's form control hooks ---
  // These will be overridden by registerOnChange and registerOnTouched
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  // --- Implementation of ControlValueAccessor interface ---

  /**
   * Called by Angular to write a value *into* your component
   * (e.g., from the parent's [ngModel]="userEmail")
   */
  writeValue(obj: any): void {
    if (obj !== this._value) {
      this._value = obj;
    }
  }

  /**
   * Called by Angular to register a callback function that you
   * should call whenever the component's value changes.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Called by Angular to register a callback function that you
   * should call whenever the component is "touched" (blurred).
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * This function is called when the control's disabled state changes.
   */
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
