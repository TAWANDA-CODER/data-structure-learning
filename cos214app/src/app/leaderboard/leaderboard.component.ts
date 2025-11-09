import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'cos214app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class LeaderboardComponent {
  selectedSegment = 'first';

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  constructor() {}

  //get daily
  //get monthly
  //get weekly
  leaderboard = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 110 },
    { name: 'Charlie', score: 105 },
    { name: 'Diana', score: 95 },
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 110 },
    { name: 'Charlie', score: 105 },
    { name: 'Diana', score: 95 },
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 110 },
  ];

  get sortedLeaderboard() {
    return this.leaderboard.sort((a, b) => b.score - a.score);
  }

  avatarImages = [
    'assets/avatars/avatar1.jpg',
    'assets/avatars/avatar2.jpg',
    'assets/avatars/avatar3.jpg',
    'assets/avatars/avatar4.jpg',
    'assets/avatars/avatar1.jpg',
    'assets/avatars/avatar2.jpg',
    'assets/avatars/avatar3.jpg',
    'assets/avatars/avatar4.jpg',
    'assets/avatars/avatar3.jpg',
    'assets/avatars/avatar4.jpg',
  ];
  ngOnInit() {}
}
