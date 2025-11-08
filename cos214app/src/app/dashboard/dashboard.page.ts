import { Component } from '@angular/core';
import { FloatingTabBarComponent, TabItem } from '../floating-tab-bar/floating-tab-bar.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FloatingTabBarComponent],
})
export class DashboardPage {
  activeTab = 'home';

  tabs: TabItem[] = [
    { id: 'home', label: 'Home', icon: 'home-outline' },
    { id: 'search', label: 'Search', icon: 'search-outline' },
    { id: 'notifications', label: 'Alerts', icon: 'notifications-outline', badge: 5 },
    { id: 'profile', label: 'Profile', icon: 'person-outline' },
  ];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
    console.log('Active tab:', tabId);
    // Handle navigation or content switching here
  }
}
