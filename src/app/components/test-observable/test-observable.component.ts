import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit, OnDestroy {
  observable$: Observable<number>;
  subscribtions: Subscription[] = [];
  constructor() {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable$.subscribe((x) => {
      console.log(x);
    });

    setTimeout(() => {
      this.observable$.subscribe({
        next: (x) => {
          console.log('in timeout observer :', x);
        },
        complete: () => {
          console.log('End');
        },
      });
    }, 2000);
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
  }
}
