import { Component, OnInit, NgModule } from '@angular/core';
import { Contract, ContractService } from 'src/app/core';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})


export class CustomerDetailsComponent implements OnInit {

  public contracts: Contract[] = [];

  constructor(private contractService: ContractService,
    private toastrService: NbToastrService
  ) { }

  settings = {
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
      id: {
        title: 'Id',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      customerId: {
        title: 'Customer Id',
        type: 'string',
      },
      startDate: {
        title: 'Start Date',
        type: 'string',
      },
      endDate: {
        title: 'End Date',
        type: 'string',
      },
      coeffSunday: {
        title: 'Coeff Sunday',
        type: 'string',
      },
      status: {
        title: 'Status',
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
      description: {
        title: 'Description',
        type: 'string',
      },
    },
  };

  ngOnInit() {
    this.contractService.getAll().subscribe((data) => {
      this.contracts = data;
      console.log(this.contracts);
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

}
