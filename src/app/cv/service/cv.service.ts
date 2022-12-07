import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private selectCvSubject = new Subject<number>();
  selectItemObservable$ = this.selectCvSubject.asObservable();
  constructor(private http: HttpClient) {}
  selectCv(num: number) {
    this.selectCvSubject.next(num);
  }
  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
