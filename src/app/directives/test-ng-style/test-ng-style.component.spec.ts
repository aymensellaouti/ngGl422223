import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgStyleComponent } from './test-ng-style.component';

describe('TestNgStyleComponent', () => {
  let component: TestNgStyleComponent;
  let fixture: ComponentFixture<TestNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
