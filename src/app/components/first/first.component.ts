import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  isHidden = true;
   buttonTitle = 'show';
  @Input() inputContent = '';
  constructor() {}

  ngOnInit(): void {}
  showHide() {
    this.isHidden = !this.isHidden;
    this.buttonTitle = this.buttonTitle === 'show' ? 'hide' : 'show';
  }
  changeInputMessage(newValue: string) {
    this.inputContent = newValue;
  }
}
