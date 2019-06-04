import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherTaskComponent } from './add-other-task.component';

describe('AddOtherTaskComponent', () => {
  let component: AddOtherTaskComponent;
  let fixture: ComponentFixture<AddOtherTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOtherTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
