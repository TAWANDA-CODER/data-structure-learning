import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardItem } from 'src/utils/Interfaces';



@Component({
  selector: 'cos214app-tutorials',
  standalone: true, // ✅ Standalone component
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
  imports: [CommonModule, IonicModule], // ✅ Works because it's standalone
})
export class TutorialsComponent {
  @Input() tutorialCards: CardItem[] = [];

  constructor() {}

  ngOnInit() {}
}
