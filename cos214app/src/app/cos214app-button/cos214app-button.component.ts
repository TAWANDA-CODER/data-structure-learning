import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'cos214app-button',
  templateUrl: './cos214app-button.component.html',
  styleUrls: ['./cos214app-button.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class COS214AppButtonComponent {
  @Input() label: string = 'Button';
  @Input() iconSrc: string | null = null;
  @Input() fill: 'solid' | 'outline' | 'clear' = 'solid';
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
