import { Injectable } from '@angular/core';
import { WelcomingService } from './welcoming.service';
@Injectable()
export class LoggerService {
  constructor(private welcoming: WelcomingService) {}
  logger(m: any) {
    console.log('From Logger', m);
  }
}
