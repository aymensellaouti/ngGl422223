import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReactiveFormComponent } from './test-reactive-form.component';

describe('TestReactiveFormComponent', () => {
  let component: TestReactiveFormComponent;
  let fixture: ComponentFixture<TestReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
