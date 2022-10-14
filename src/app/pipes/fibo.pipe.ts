import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
@Pipe({
  name: 'fibo',
})
export class FiboPipe implements PipeTransform {
  @memo()
  fibo(n: number): number {
    console.log(`fib(${n})`);
    if (n == 0 || n == 1) return 1;
    return this.fibo(n - 1) + this.fibo(n - 2);
  }
  @memo()
  transform(n: number): number {
    console.log('in pipe :', n);
    return this.fibo(n);
  }
}
