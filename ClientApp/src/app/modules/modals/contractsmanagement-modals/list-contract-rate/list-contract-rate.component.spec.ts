import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContractRateComponent } from './list-contract-rate.component';

describe('ListContractRateComponent', () => {
  let component: ListContractRateComponent;
  let fixture: ComponentFixture<ListContractRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContractRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContractRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
