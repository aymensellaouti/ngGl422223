import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-reactive-form',
  templateUrl: './test-reactive-form.component.html',
  styleUrls: ['./test-reactive-form.component.css'],
})
export class TestReactiveFormComponent implements OnInit {
  fg1 = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)], []),
  });
  fg2: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.fg2 = this.formBuilder.group({
      name: [null],
      options: {
        validators: [],
        asyncValidators: [],
        updateOn: 'change'
      }
    });
  }

  ngOnInit(): void {}
}
