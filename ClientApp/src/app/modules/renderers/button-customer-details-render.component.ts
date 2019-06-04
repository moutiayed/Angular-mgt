import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { ListContractComponent } from '../modals/contractsmanagement-modals/list-contract/list-contract.component';
import { CustomerDetailsComponent } from '../modals/customersmanagement-modals/customer-details/customer-details.component';

@Component({
  selector: 'app-button-view',
  template: `
<button nbButton hero status="success" (click)="onClick()">
Details
</button>`,
styles: [`i {font-size: 1rem;}`],
})

export class ButtonCustomerDetailsRenderComponent implements ViewCell, OnInit {
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.dialogService.open(CustomerDetailsComponent);
  }

}
