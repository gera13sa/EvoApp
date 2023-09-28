import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value: number[] = [];
  randomValue: string[] = [];

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.getValue().subscribe({
      next: (value) => this.value.push(value),
    });

    this.counterService.getRandomValue().subscribe({
      next: (randomValue) => this.randomValue.push(randomValue),
    });

    this.counterService.startValueCounter();
    this.counterService.startRandomValueCounter();
  }

  stopValueCounter() {
    this.counterService.stopValueCounter();
  }

  stopRandomValueCounter() {
    this.counterService.stopRandomValueCounter();
  }
}
