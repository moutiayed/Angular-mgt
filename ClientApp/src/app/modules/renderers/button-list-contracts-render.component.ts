import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { ListContractComponent } from '../modals/contractsmanagement-modals/list-contract/list-contract.component';
import { Customer } from 'src/app/core/models/customer.model';

@Component({
  selector: 'app-button-view',
  template: `
<button nbButton hero status="success" (click)="onClick()">
Contracts
</button>`,
  styles: [`i {font-size: 1rem;}`],
})

export class ButtonListContractsRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;

  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() rowData: Customer;

  @Output() action = new EventEmitter();

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    // console.log('id in render component' + this.rowData.id);
    this.dialogService.open(ListContractComponent, { context: { customer: this.rowData } });
  }
}
