import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'cos214app-input',
  templateUrl: './cos214app-input.component.html',
  styleUrls: ['./cos214app-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
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
  private _value: string = '';

  constructor() {
    addIcons({
      'eye-outline': eyeOutline,
      'eye-off-outline': eyeOffOutline,
    });
  }

  // Value getter/setter
  get value(): string {
    return this._value;
  }

  set value(val: string) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(val);
    }
  }

  // ControlValueAccessor interface
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
}
