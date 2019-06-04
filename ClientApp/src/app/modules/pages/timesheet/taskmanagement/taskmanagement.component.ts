import { Component, OnInit } from '@angular/core';
import { CreateTaskComponent } from 'src/app/modules/modals/taskmanagement-modals/create-task/create-task.component';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { UserTask } from 'src/app/core/models/userTask.model';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbAccessChecker } from '@nebular/security';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { ValidateTasksComponent } from 'src/app/modules/modals/taskmanagement-modals/validate-tasks/validate-tasks.component';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { DatePipe } from '@angular/common';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { CustomServerDataSource } from 'src/app/core/services/serverDataSourceTasks';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent implements OnInit {
  l: Array<{ value: string, title: string }> = []

  typeList; //select option of task type

  typeListUpdate = [];

  tasks: UserTask[] = [];

  //source: LocalDataSource;
  source1: CustomServerDataSource;
  user: UserPayload; // this variable will store the token payload

  ////////////////////////// Combo box user /////////////////////////////////
  idE;
  employees = [];
  ///////////////////////////////////////////////////////////////////////////
  settings = {}
  settingsAdminTL = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: {
      add: false,
      delete: true,
      update: true
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
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
        /*editor: {
          type: 'list',
          config: { list: this.l },
        },*/
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      closingDate: {
        title: 'Closing Date',
        type: 'string',
        valuePrepareFunction: (closingDate) => {
          var raw = new Date(closingDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      estimateWorkLoad: {
        title: 'Estimated WorkLoad',
        type: 'string',
      },
      tofinalise: {
        title: 'To Finalise',
        type: 'string',
      },
      requirementNom: {
        title: 'Requirement Name',
        type: 'string',
        editable: false,
      },
      isValidated: {
        title: 'Is validated',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'true', title: 'true' },
              { value: 'false', title: 'false' },
            ],
          },
        },
      },
    },
  };

  settingsUser = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: {
      add: false,
      delete: true,
      update: true
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
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
        /*editor: {
          type: 'list',
          config: { list: this.l },
        },*/
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      closingDate: {
        title: 'Closing Date',
        type: 'string',
        valuePrepareFunction: (closingDate) => {
          var raw = new Date(closingDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      estimateWorkLoad: {
        title: 'Estimated WorkLoad',
        type: 'string',
      },
      tofinalise: {
        title: 'To Finalise',
        type: 'string',
      },
      requirementNom: {
        title: 'Requirement Name',
        type: 'string',
        editable: false,
      },
      isValidated: {
        title: 'Is validated',
        type: 'string',
        editable: false,
      },
    },
  };

  constructor(
    private taskService: UserTaskService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    private parameterService: ParameterService,
    private datePipe: DatePipe, //For Date format
    private employeeService: EmployeeService, //Get All Users For Combo box
    public http: HttpClient,
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

      });
    this.source1 = new CustomServerDataSource(http, this.user.id);
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.l = [];
    this.parameterService.getByGroup("UserTasksType")  //get list of task types 
      .subscribe(data => {
        this.typeList = data;
        this.typeList.forEach(k => {
          this.l.push({ value: k.value, title: k.value });
        })
      });
    //console.log(this.l); list for edit UserTasksType

    if (this.user.rol != "User") {
      this.employeeService.getAll().subscribe((data) => { //get list of all users for combo box
        this.employees = data;
      });
      this.settings = this.settingsAdminTL;
    }
    else { this.settings = this.settingsUser; }

    if (this.idE == null) {
      this.source1 = new CustomServerDataSource(this.http, this.user.id);
      /*this.taskService.getById(this.user.id.toString()).subscribe((data) => {
        this.source = new LocalDataSource(data);
      });*/

    } else {
      this.source1 = new CustomServerDataSource(this.http, this.idE);
      /*this.taskService.getById(this.idE).subscribe((data) => {
        this.source = new LocalDataSource(data);
      });*/
    }
  }

  open() {
    this.dialogService.open(CreateTaskComponent)
      .onClose.subscribe((data) => {
        if (data) {
          this.source1.prepend(data);
        }
        this.reload();
      }
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.taskService.destroy(event.data.id).
        subscribe(data => this.showToast('Task deleted successfully', 'Success'));
        this.reload();
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.taskService.update(event.newData).
        subscribe(data => {
          this.showToast('Task updated successfully', 'Success');
          this.reload();
        }
        );
    } else {
      event.confirm.reject();
    }
  }

  openValidateTasks() {
    this.dialogService.open(ValidateTasksComponent);
  }

  /*editListType(): Array<{ value: string, title: string }> {
    const list: Array<{ value: string, title: string }> = []
    this.parameterService.getByGroup("UserTasksType")  //get list of task types 
      .subscribe(data => {
        this.typeList = data;
        this.typeList.forEach(k => {
          list.push({ value: k.value, title: k.value });
        })
      });
    return list;
  }*/

}
