// custom-button.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'cos214app-button',
  templateUrl: './cos214app-button.component.html',
  styleUrls: ['./cos214app-button.component.scss'],
  standalone: true, // ✅ Make the component standalone
  imports: [CommonModule, FormsModule, IonicModule],
})
export class COS214AppButtonComponent {
  @Input() label: string = 'Button'; // Text to show
  @Input() iconSrc: string | null = null; // Optional icon URL
  @Input() fill: 'solid' | 'outline' | 'clear' = 'solid'; // Ionic fill style
  @Input() color: string = 'medium'; // Ionic color
  @Input() disabled: boolean = false; // Optional disabled state
  @Input() type: string = 'button'; // Default to 'button'
}
