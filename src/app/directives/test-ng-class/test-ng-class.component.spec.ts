import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgClassComponent } from './test-ng-class.component';

describe('TestNgClassComponent', () => {
  let component: TestNgClassComponent;
  let fixture: ComponentFixture<TestNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
