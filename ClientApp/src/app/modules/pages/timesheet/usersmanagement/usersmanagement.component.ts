import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CreateUserComponent } from 'src/app/modules/modals/usersmanagement-modals/create-user/create-user.component';
import { RequestHolidayComponent } from 'src/app/modules/modals/usersmanagement-modals/request-holiday/request-holiday.component';
import { LocalDataSource } from 'ng2-smart-table';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';
import { ButtonListContractsUserRenderComponent } from 'src/app/modules/renderers/ButtonListContractsUserRenderComponent';
import { ButtonAddContractRenderComponent } from 'src/app/modules/renderers/ButtonAddContractRenderComponent';
import { NbAccessChecker } from '@nebular/security';
import { ButtonResetPasswordRenderComponent } from 'src/app/modules/renderers/button-reset-password-render-component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usersmanagement',
  templateUrl: './usersmanagement.component.html',
  styleUrls: ['./usersmanagement.component.css']
})
export class UsersmanagementComponent implements OnInit {
  public employees: Employee[] = [];
  public source: LocalDataSource;
  constructor(
    private employeeService: EmployeeService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private datePipe: DatePipe, //For Date format
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
      /*id: {
        title: 'Id',
        type: 'string',
      },*/
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      birthday: {
        title: 'Birthday',
        type: 'string',
        valuePrepareFunction: (birthday) => { 
          var raw = new Date(birthday);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      adress: {
        title: 'Adress',
        type: 'string',
      },
      /*cin: {
        title: 'Cin',
        type: 'string',
      },*/
      city: {
        title: 'City',
        type: 'string',
      },
      function: {
        title: 'Function',
        type: 'string',
      },
      phoneNumber: {
        title: 'Phone Number',
        type: 'string',
      },
      civilStatus: {
        title: 'Civil Status',
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
      email: {
        title: 'Email',
        type: 'string',
      },
      button: {
        title: 'Rates',
        type: 'custom',
        filter: false,
        renderComponent: ButtonListContractsUserRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        },
        editable : false,
      },
      button2: {
        title: 'Add contract',
        type: 'custom',
        filter: false,
        renderComponent: ButtonAddContractRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        }
        ,editable : false,
      },
      button3: {
        title: 'Reset password',
        type: 'custom',
        filter: false,
        renderComponent: ButtonResetPasswordRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        }
        ,editable : false,
      },
    },
  };

  ngOnInit() {
    this.employeeService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
    });
  }

  open() {
    this.dialogService.open(CreateUserComponent)
      .onClose.subscribe((data) => {
        if (data) { this.source.prepend(data); }
      }
      );
  }

  open2() {
    this.dialogService.open(RequestHolidayComponent);
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.employeeService.destroy(event.data.id).
        subscribe(data => this.showToast('User deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.employeeService.update(event.newData).
        subscribe(data => this.showToast('User updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
