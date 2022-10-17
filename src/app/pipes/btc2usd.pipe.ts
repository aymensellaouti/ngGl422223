import { Pipe, PipeTransform } from '@angular/core';

const BTCUSDVALUE = 19680.3;

@Pipe({
  name: 'btc2usd',
  pure: true
})
export class Btc2usdPipe implements PipeTransform {
  transform(amount: number, isBtcToUsd = true): number {
    if (isBtcToUsd) return amount * BTCUSDVALUE;
    return amount / BTCUSDVALUE;
  }
}
