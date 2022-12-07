import { Component, Input, OnInit } from '@angular/core';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() num: number = 0;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {}

  selectCv() {
    this.cvService.selectCv(this.num);
  }
}
