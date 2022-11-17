import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBg]',
})
export class BgDirective implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.appBg;
  }
  @Input()
  appBg = 'green';
  @HostBinding('style.backgroundColor') bgc = this.appBg;
}
