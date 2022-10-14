import { outputAst } from '@angular/compiler';
import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Output() sendMessageToDad = new EventEmitter<string>();
  @Input() test = 'initValue';
  constructor() {
    console.log('in Constructor',this.test);
  }

  ngOnInit(): void {
    console.log('in NgOnInit',this.test);
  }
  sendData() {
    this.sendMessageToDad.emit('cc papa');
  }
}
