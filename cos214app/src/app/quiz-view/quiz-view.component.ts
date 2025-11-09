import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  selectedAnswer?: number;
}

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, // 👈 This enables [(ngModel)]
  ],
  standalone: true,
})
export class QuizViewComponent implements OnInit {
  quizId!: number;
  quizTitle = '';
  quizState: 'start' | 'in-progress' | 'summary' = 'start'; // 👈 handles UI view state
  currentQuestionIndex = 0;
  questions: Question[] = [];
  score = 0;
  warningMessage = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.quizId = +this.route.snapshot.paramMap.get('id')!;
    this.quizTitle = `Quiz #${this.quizId}`;

    // Mock API call (replace with real one later)
    this.loadMockQuestions();
  }

  // Simulate API call
  loadMockQuestions() {
    this.questions = [
      {
        id: 1,
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: 'What color is the sky?',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: 'What is the capital of Japan?',
        options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: 'Which planet is Earth?',
        options: ['1st', '2nd', '3rd', '4th'],
        correctAnswer: 2,
      },
    ];
  }

  startQuiz() {
    this.quizState = 'in-progress';
  }

  selectOption(optionIndex: number) {
    this.questions[this.currentQuestionIndex].selectedAnswer = optionIndex;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finishQuiz();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  finishQuiz() {
    this.quizState = 'summary';
    const incompleteQuestions = this.questions
      .filter((q) => q.selectedAnswer === undefined)
      .map((q) => q.id);

    if (incompleteQuestions.length > 0) {
      const missingList = incompleteQuestions.join(', ');
      this.warningMessage = `⚠️ You didn’t complete question${
        incompleteQuestions.length > 1 ? 's' : ''
      } ${missingList}.`;
      return;
    }

    this.warningMessage = '';
    this.calculateScore();
  }

  calculateScore() {
    this.score = this.questions.filter(
      (q) => q.selectedAnswer === q.correctAnswer
    ).length;
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.questions.forEach((q) => (q.selectedAnswer = undefined));
    this.score = 0;
    this.quizState = 'start';
  }

  completedQuiz() {
    this.router.navigate(['../dashboard']);
  }
}
