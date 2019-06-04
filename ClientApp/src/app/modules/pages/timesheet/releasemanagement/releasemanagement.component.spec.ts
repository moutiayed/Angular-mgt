import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasemanagementComponent } from './releasemanagement.component';

describe('ReleasemanagementComponent', () => {
  let component: ReleasemanagementComponent;
  let fixture: ComponentFixture<ReleasemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
