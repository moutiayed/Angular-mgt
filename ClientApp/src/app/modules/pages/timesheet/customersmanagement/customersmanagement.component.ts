import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { CreateCustomerComponent } from 'src/app/modules/modals/customersmanagement-modals/create-customer/create-customer.component';
import { ButtonListContractsRenderComponent } from 'src/app/modules/renderers/button-list-contracts-render.component';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer.model';
import { LocalDataSource } from 'ng2-smart-table';
import { NbAccessChecker } from '@nebular/security';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Component({
  selector: 'app-customersmanagement',
  templateUrl: './customersmanagement.component.html',
  styleUrls: ['./customersmanagement.component.css']
})
export class CustomersmanagementComponent implements OnInit {
  customers: Customer[] = [];
  source: LocalDataSource;
  user: UserPayload;

  constructor(
    private customerService: CustomerService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService) {
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
      adress: {
        title: 'Address',
        type: 'string',
      },
      phoneNumber: {
        title: 'Phone number',
        type: 'string',
      },
      mail: {
        title: 'Mail',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      button: {
        title: 'Contracts',
        type: 'custom',
        filter: false,
        editable: false,
        renderComponent: ButtonListContractsRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        }
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
      adress: {
        title: 'Address',
        type: 'string',
      },
      phoneNumber: {
        title: 'Phone number',
        type: 'string',
      },
      mail: {
        title: 'Mail',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      button: {
        title: 'Contracts',
        type: 'custom',
        filter: false,
        editable: false,
        renderComponent: ButtonListContractsRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        },
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
    this.customerService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
    });
  }

  open() {
    this.dialogService.open(CreateCustomerComponent)
      .onClose.subscribe((data) => {
        if (data) { this.source.prepend(data); }
      }
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.customerService.destroy(event.data.id).
        subscribe(data => this.showToast('Customer deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.customerService.update(event.newData).
        subscribe(data => this.showToast('Customer updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
