import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.css'],
})
export class TestNgClassComponent implements OnInit {
  isEteinte = true;
  constructor() {}
  interupteur() {
    this.isEteinte = !this.isEteinte;
  }
  ngOnInit(): void {}
}
