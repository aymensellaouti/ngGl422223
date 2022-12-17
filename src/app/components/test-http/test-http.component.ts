import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestHttpService, Todo } from '../../services/test-http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css'],
})
export class TestHttpComponent implements OnInit {
  constructor(private testHttpService: TestHttpService) {
    this.todos$ = this.testHttpService
      .getTodos()
      .pipe(map((todos) => todos.filter((todo) => todo.completed)));
  }
  todos$: Observable<Todo[]>;
  ngOnInit(): void {}
}
