import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private valueSubject = new Subject<number>();
  private randomValueSubject = new Subject<string>();

  private valueStreamSubscription!: Subscription;
  private randomValueStreamSubscription!: Subscription;

  getValue() {
    return this.valueSubject.asObservable();
  }

  getRandomValue() {
    return this.randomValueSubject.asObservable();
  }

  startValueCounter() {
    this.valueStreamSubscription = interval(2000).subscribe((value) => {
      this.valueSubject.next(value + 1);
    });
  }

  stopValueCounter() {
    if (this.valueStreamSubscription) {
      this.valueStreamSubscription.unsubscribe();
    }
  }

  startRandomValueCounter() {
    this.randomValueStreamSubscription = interval(2000)
      .pipe(
        map(() => {
          const randomValue = Math.floor(Math.random() * 100);
          return `Random Value: ${randomValue}`;
        })
      )
      .subscribe((randomValue) => {
        this.randomValueSubject.next(randomValue);
      });
  }

  stopRandomValueCounter() {
    if (this.randomValueStreamSubscription) {
      this.randomValueStreamSubscription.unsubscribe();
    }
  }
}
