import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateFormComponent } from './test-template-form.component';

describe('TestTemplateFormComponent', () => {
  let component: TestTemplateFormComponent;
  let fixture: ComponentFixture<TestTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
