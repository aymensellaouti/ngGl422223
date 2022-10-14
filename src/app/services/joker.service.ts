import { Injectable } from '@angular/core';
import { WelcomingService } from './welcoming.service';

@Injectable({
  providedIn: 'root'
})
export class JokerService {
  constructor(private welcoming: WelcomingService) { }
}
