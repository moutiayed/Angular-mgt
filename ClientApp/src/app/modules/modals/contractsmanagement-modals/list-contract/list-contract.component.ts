import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateContractComponent } from '../create-contract/create-contract.component';
import { NbToastrService, NbDialogService, NbDialogRef } from '@nebular/theme';
import { ContractService, Contract } from 'src/app/core';
import { Customer } from 'src/app/core/models/customer.model';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [];
  @Input() customer: Customer;
  user: UserPayload;

  constructor(
    private contractService: ContractService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<ListContractComponent>,
    private authService: NbAuthService,
    private datePipe: DatePipe, //For Date format
    ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
          // this.token = token;
        }

      });
  }

  settings = {}

  settingsAdmin = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: {
      add: false,
      edit: true,
      delete: true
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      startDate: {
        title: 'Start Date',
        type: 'string',
        valuePrepareFunction: (startDate) => { 
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      endDate: {
        title: 'End Date',
        type: 'string',
        valuePrepareFunction: (endDate) => { 
          var raw = new Date(endDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      coeffSunday: {
        title: 'Coeff Sunday',
        type: 'string',
      },
      coeffBase: {
        title: 'Coeff Base',
        type: 'string',
      },
      coeffOutOfBusinessWeek: {
        title: 'Coeff Out Of Business Week',
        type: 'string',
      },
      coeffSaturday: {
        title: 'Coeff Saturday',
        type: 'string',
      },
    },
  };

  settingsTL = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: false,
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      startDate: {
        title: 'Start Date',
        type: 'string',
        valuePrepareFunction: (startDate) => { 
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      endDate: {
        title: 'End Date',
        type: 'string',
        valuePrepareFunction: (endDate) => { 
          var raw = new Date(endDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      coeffSunday: {
        title: 'Coeff Sunday',
        type: 'string',
      },
      coeffBase: {
        title: 'Coeff Base',
        type: 'string',
      },
      coeffOutOfBusinessWeek: {
        title: 'Coeff Out Of Business Week',
        type: 'string',
      },
      coeffSaturday: {
        title: 'Coeff Saturday',
        type: 'string',
      },
    },
  };

  ngOnInit() {
    if (this.user.rol == "TeamLeader") {
      this.settings = this.settingsTL;
    }
    else {
      this.settings = this.settingsAdmin;
    }
    this.contractService.getContractsByCustomerId(this.customer.id.toString()).subscribe((data) => {
      this.contracts = data;
    });
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.contractService.destroy(event.data.id).
        subscribe(data => this.showToast('Contract deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.contractService.update(event.newData).
        subscribe(data => this.showToast('Contract updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  dismiss() {
    this.ref.close();
  }

}
