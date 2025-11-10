import { Component } from '@angular/core';
import {
  FloatingTabBarComponent,
  TabItem,
} from '../floating-tab-bar/floating-tab-bar.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from '../tutorials/tutorials.component';
import { QuizComponent } from '../quiz/quiz.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FloatingTabBarComponent,
    TutorialsComponent,
    QuizComponent,
    LeaderboardComponent,
  ],
})
export class DashboardPage {
  activeTab = 'home';

  tabs: TabItem[] = [
    { id: 'home', label: 'Learn', icon: 'library-outline' },
    { id: 'quiz', label: 'Quiz', icon: 'bulb-outline' },
    { id: 'leaderBoard', label: 'Leader Board', icon: 'bar-chart-outline' },

    {
      id: 'insights',
      label: 'Insights',
      icon: 'trending-up-outline',
      badge: 5,
    },
    { id: 'profile', label: 'Profile', icon: 'person-outline' },
  ];

  tutorialCards = [
    {
      id: 1,
      title: 'Lesson 1: What Is the Singleton Pattern?',
      subtitle: 'Definition and Core Concept',
      description:
        'Learn what the Singleton Pattern is, why it exists, and the problems it solves — ensuring only one instance of a class is ever created.',
    },
    {
      id: 2,
      title: 'Lesson 2: When and Why to Use Singleton',
      subtitle: 'Practical Use Cases',
      description:
        'Explore common real-world situations where Singleton is beneficial, such as managing global configurations, logging, or database connections.',
    },
    {
      id: 3,
      title: 'Lesson 3: Structure of the Singleton Pattern',
      subtitle: 'Understanding the Components',
      description:
        'Study the structure of a Singleton, including its private constructor, static instance, and global access method.',
    },
    {
      id: 4,
      title: 'Lesson 4: Basic Implementation',
      subtitle: 'Step-by-Step Example',
      description:
        'Write a simple Singleton implementation in TypeScript or Java to understand the foundational structure and logic.',
    },
    {
      id: 5,
      title: 'Lesson 5: Thread Safety in Singletons',
      subtitle: 'Dealing with Concurrency',
      description:
        'Understand how concurrency can create multiple instances and learn to safeguard against it using synchronization or locking.',
    },
    {
      id: 6,
      title: 'Lesson 6: Eager vs. Lazy Initialization',
      subtitle: 'Performance Trade-offs',
      description:
        'Compare eager initialization (load early) vs. lazy initialization (load when needed) and when to use each approach.',
    },
    {
      id: 7,
      title: 'Lesson 7: Double-Checked Locking',
      subtitle: 'Optimizing Thread Safety',
      description:
        'Implement the double-checked locking pattern to create efficient, thread-safe Singletons.',
    },
    {
      id: 8,
      title: 'Lesson 8: Singleton with Static Blocks and Inner Classes',
      subtitle: 'Alternative Implementations',
      description:
        'Discover other safe and concise ways to create Singletons, including static blocks and inner class techniques.',
    },
    {
      id: 9,
      title: 'Lesson 9: Singleton in JavaScript and TypeScript',
      subtitle: 'Language-Specific Implementation',
      description:
        'Learn how to create Singletons in JS/TS using ES6 modules, closures, and class-based approaches.',
    },
    {
      id: 10,
      title: 'Lesson 10: Singleton in Other Languages',
      subtitle: 'Python, C#, Swift Examples',
      description:
        'Explore Singleton implementation patterns in other languages and their unique syntax differences.',
    },
    {
      id: 11,
      title: 'Lesson 11: Dependency Injection and Singleton',
      subtitle: 'Integrating with Frameworks',
      description:
        'Understand how DI frameworks like Angular or Spring use the Singleton pattern behind the scenes.',
    },
    {
      id: 12,
      title: 'Lesson 12: Testing and Mocking Singletons',
      subtitle: 'Unit Testing Strategies',
      description:
        'Learn how to test Singletons effectively and avoid global state interference during testing.',
    },
    {
      id: 13,
      title: 'Lesson 13: Serialization and Cloning Problems',
      subtitle: 'Maintaining True Singularity',
      description:
        'Examine how serialization or cloning can create new instances and break Singleton integrity.',
    },
    {
      id: 14,
      title: 'Lesson 14: Breaking Singletons with Reflection',
      subtitle: 'Understanding Vulnerabilities',
      description:
        'Discover how reflection can bypass private constructors and how to prevent it.',
    },
    {
      id: 15,
      title: 'Lesson 15: Enum-Based Singleton (Java)',
      subtitle: 'The Best Java Singleton',
      description:
        'Learn the safest and simplest Singleton implementation in Java using enums.',
    },
    {
      id: 16,
      title: 'Lesson 16: Common Singleton Use Cases',
      subtitle: 'Real-World Applications',
      description:
        'Dive into practical examples — like configuration managers, loggers, and cache systems.',
    },
    {
      id: 17,
      title: 'Lesson 17: Singleton vs. Static Class',
      subtitle: 'Key Differences',
      description:
        'Understand when to use a Singleton versus static methods and why they’re not the same.',
    },
    {
      id: 18,
      title: 'Lesson 18: Pitfalls and Anti-Patterns',
      subtitle: 'Avoiding Overuse',
      description:
        'Learn the downsides of excessive Singleton use and how it can lead to tight coupling and testing issues.',
    },
    {
      id: 19,
      title: 'Lesson 19: Refactoring Singleton-Heavy Code',
      subtitle: 'Improving Maintainability',
      description:
        'Learn how to refactor or replace existing Singletons to make your codebase cleaner and more modular.',
    },
    {
      id: 20,
      title: 'Lesson 20: Final Project — Build a Singleton-Based App',
      subtitle: 'Hands-On Implementation',
      description:
        'Apply everything you’ve learned by building a complete project, such as an app-wide configuration or logging system.',
    },
  ];

  quizCards = [
    {
      id: 1,
      title: 'Quiz 1: Understanding the Singleton Pattern',
      subtitle: 'Definition and Purpose',
      description:
        'Test your understanding of what the Singleton Pattern is, its intent, and how it ensures a single global instance.',
    },
    {
      id: 2,
      title: 'Quiz 2: When and Why to Use Singleton',
      subtitle: 'Use Cases and Scenarios',
      description:
        'Assess your knowledge of appropriate use cases for Singleton and when it is the right design choice.',
    },
    {
      id: 3,
      title: 'Quiz 3: Structure of a Singleton',
      subtitle: 'Core Components',
      description:
        'Check your grasp of the key elements that make up a Singleton class — including constructors, static fields, and access methods.',
    },
    {
      id: 4,
      title: 'Quiz 4: Basic Implementation',
      subtitle: 'Practical Application',
      description:
        'Evaluate your ability to implement a simple Singleton class in a programming language of your choice.',
    },
    {
      id: 5,
      title: 'Quiz 5: Thread Safety in Singletons',
      subtitle: 'Concurrency Challenges',
      description:
        'Challenge yourself with questions about multithreading issues and how to maintain Singleton integrity.',
    },
    {
      id: 6,
      title: 'Quiz 6: Eager vs. Lazy Initialization',
      subtitle: 'Performance and Memory Trade-offs',
      description:
        'Review your understanding of the differences between eager and lazy initialization strategies in Singleton design.',
    },
    {
      id: 7,
      title: 'Quiz 7: Double-Checked Locking',
      subtitle: 'Thread-Safe Optimization',
      description:
        'Test your ability to recognize and implement double-checked locking to create an efficient, thread-safe Singleton.',
    },
    {
      id: 8,
      title: 'Quiz 8: Alternative Implementations',
      subtitle: 'Static Blocks and Inner Classes',
      description:
        'Explore variations of Singleton implementation, including static blocks and inner class approaches.',
    },
    {
      id: 9,
      title: 'Quiz 9: Singleton in JavaScript and TypeScript',
      subtitle: 'Language-Specific Design',
      description:
        'Confirm your knowledge of how Singletons are implemented in JavaScript or TypeScript using modules or closures.',
    },
    {
      id: 10,
      title: 'Quiz 10: Singleton Across Languages',
      subtitle: 'Comparative Concepts',
      description:
        'Test your ability to recognize Singleton patterns in other languages such as Python, C#, and Swift.',
    },
    {
      id: 11,
      title: 'Quiz 11: Dependency Injection and Singleton',
      subtitle: 'Framework Integration',
      description:
        'Assess how well you understand Singleton usage within dependency injection frameworks like Angular or Spring.',
    },
    {
      id: 12,
      title: 'Quiz 12: Testing and Mocking Singletons',
      subtitle: 'Unit Testing Challenges',
      description:
        'Challenge your understanding of testability issues and mocking techniques for Singleton instances.',
    },
    {
      id: 13,
      title: 'Quiz 13: Serialization and Cloning Issues',
      subtitle: 'Maintaining a Single Instance',
      description:
        'Evaluate your awareness of how serialization or cloning can violate Singleton constraints.',
    },
    {
      id: 14,
      title: 'Quiz 14: Reflection and Singleton Vulnerabilities',
      subtitle: 'Security and Protection',
      description:
        'Test your knowledge of how reflection can bypass Singleton restrictions and how to prevent it.',
    },
    {
      id: 15,
      title: 'Quiz 15: Enum-Based Singleton',
      subtitle: 'Best Practice in Java',
      description:
        'Review your understanding of how enums provide a robust Singleton implementation in Java.',
    },
    {
      id: 16,
      title: 'Quiz 16: Common Use Cases',
      subtitle: 'Practical Applications',
      description:
        'Check your ability to identify real-world scenarios where the Singleton pattern is an effective solution.',
    },
    {
      id: 17,
      title: 'Quiz 17: Singleton vs. Static Class',
      subtitle: 'Key Differences',
      description:
        'See if you can distinguish between Singleton objects and static classes, and when to use each.',
    },
    {
      id: 18,
      title: 'Quiz 18: Pitfalls and Anti-Patterns',
      subtitle: 'Avoiding Overuse',
      description:
        'Evaluate your understanding of how improper use of Singleton can lead to tight coupling and code rigidity.',
    },
    {
      id: 19,
      title: 'Quiz 19: Refactoring Singleton-Heavy Code',
      subtitle: 'Improving Architecture',
      description:
        'Assess your ability to identify when Singletons are overused and how to refactor them cleanly.',
    },
    {
      id: 20,
      title: 'Quiz 20: Singleton Pattern Final Assessment',
      subtitle: 'Comprehensive Review',
      description:
        'A final quiz covering all major concepts of the Singleton pattern — design, implementation, testing, and best practices.',
    },
  ];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
    console.log('Active tab:', tabId);
    // Handle navigation or content switching here
  }
}
