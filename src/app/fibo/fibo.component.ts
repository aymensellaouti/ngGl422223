import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibo',
  templateUrl: './fibo.component.html',
  styleUrls: ['./fibo.component.css'],
})
export class FiboComponent implements OnInit {
  numbers: number[] = [];
  constructor() {
    this.numbers = Array(1000)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 11) + 20);
  }
  binding = '';
  show(n: number) {
    console.log('calcul Fibo n', n);
    return this.fibo(n);
  }
  fibo(n: number): number {
    if (n == 0 || n == 1) return 1;
    return this.fibo(n - 1) + this.fibo(n - 2);
  }

  ngOnInit(): void {}
}
