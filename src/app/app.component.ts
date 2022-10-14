import { Component } from '@angular/core';
import { LoggerService } from './services/logger-service';
import { JokerService } from './services/joker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private logger: LoggerService, private joker: JokerService) {
    this.logger.logger('cc GL4');
  }
  date = new Date();
  title = 'ngGl422';
}
