import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, Observable } from 'rxjs';
import { CvService, TodoModel } from '../service/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  nb = 0;
  todos$: Observable<TodoModel[]>;
  constructor(private cvService: CvService) {
    this.cvService.selectItemObservable$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
    this.todos$ = this.cvService.getTodos();
  }

  ngOnInit(): void {}
}
