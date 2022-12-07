import { Component, OnInit } from '@angular/core';
import { CvService } from '../service/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  selectObservable$: Observable<number>;
  constructor(private cvService: CvService) {
    this.selectObservable$ = this.cvService.selectItemObservable$;
  }
  ngOnInit(): void {}
}
