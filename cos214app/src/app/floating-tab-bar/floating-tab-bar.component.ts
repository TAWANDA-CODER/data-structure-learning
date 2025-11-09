import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

export interface TabItem {
  id: string;
  label: string;
  icon: string; // Ionicon name
  badge?: number; // Optional badge count
}

import { addIcons } from 'ionicons';
// 2. Import the specific icons you need
import {
  homeOutline,
  searchOutline,
  notificationsOutline,
  personOutline,
  bookOutline,
  rocketOutline,
  barChartOutline,
  libraryOutline,
  bulbOutline,
  trendingUpOutline,
} from 'ionicons/icons';
@Component({
  selector: 'app-floating-tab-bar',
  templateUrl: './floating-tab-bar.component.html',
  styleUrls: ['./floating-tab-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class FloatingTabBarComponent {
  constructor() {
    addIcons({
      'library-outline': libraryOutline,
      'bar-chart-outline': barChartOutline,
      'trending-up-outline': trendingUpOutline,
      'bulb-outline': bulbOutline,
      'person-outline': personOutline,
    });
  }
  @Input() tabs: TabItem[] = [];
  @Input() activeTabId: string = '';
  @Output() tabChange = new EventEmitter<string>();

  onTabClick(tabId: string) {
    this.activeTabId = tabId;
    this.tabChange.emit(tabId);
  }
}
