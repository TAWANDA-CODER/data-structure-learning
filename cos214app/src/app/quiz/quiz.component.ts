import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardItem } from 'src/utils/Interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'cos214app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true, // ✅ Standalone component
})
export class QuizComponent implements OnInit {
  @Input() quizCards: CardItem[] = [];

  constructor(private router: Router) {}

  openQuiz(quizId: number) {
    this.router.navigate(['/quizview', quizId]);
  }

  ngOnInit() {}
}
