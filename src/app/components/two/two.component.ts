import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  /* twoComponent(two) */
  @Input() two = '';
  constructor() {}

  ngOnInit(): void {}
  changeTwo() {
    this.two = 'new Value';
  }
}
