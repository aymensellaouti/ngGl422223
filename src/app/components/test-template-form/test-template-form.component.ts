import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface TestFormInput {
  name: string;
  age: number;
}

@Component({
  selector: 'app-test-template-form',
  templateUrl: './test-template-form.component.html',
  styleUrls: ['./test-template-form.component.css'],
})
export class TestTemplateFormComponent implements OnInit {
  constructor() {}
  myForm: TestFormInput = {
    age: 40,
    name: 'aymen',
  };
  processForm(form: NgForm) {
    console.log(form.value);
  }
  ngOnInit(): void {}
}
