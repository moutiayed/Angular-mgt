import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedUsersToTeamComponent } from './assigned-users-to-team.component';

describe('AssignedUsersToTeamComponent', () => {
  let component: AssignedUsersToTeamComponent;
  let fixture: ComponentFixture<AssignedUsersToTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedUsersToTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedUsersToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
