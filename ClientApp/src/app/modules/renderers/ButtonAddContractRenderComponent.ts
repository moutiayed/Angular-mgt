import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { ListContractRateComponent } from '../modals/contractsmanagement-modals/list-contract-rate/list-contract-rate.component';
import { Employee } from 'src/app/core/models/employee.model';
import { ContractToUserComponent } from '../modals/contractsmanagement-modals/contract-to-user/contract-to-user.component';

@Component({
  selector: 'app-button-view',
  template: `
<button nbButton hero status="success" (click)="onClick()">
Add
</button>`,
  styles: [`i {font-size: 1rem;}`],
})

export class ButtonAddContractRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;

  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() rowData: Employee;

  @Output() action = new EventEmitter();

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.dialogService.open(ContractToUserComponent, { context: { employee: this.rowData } });
  }
}
