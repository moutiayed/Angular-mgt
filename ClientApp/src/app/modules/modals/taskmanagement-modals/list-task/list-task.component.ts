import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { NbToastrService, NbDialogService, NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { UserTask } from 'src/app/core/models/userTask.model';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { Requirement } from 'src/app/core';
import { CreateTaskInListTaskComponent } from '../create-task-in-list-task/create-task-in-list-task.component';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  @Input() requirement: Requirement;
  user: UserPayload;
  tasks: UserTask[] = [];
  source: LocalDataSource;

  settings = {};

  settingsAdminTL = {
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
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
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
      isValidated: {
        title: 'Is validated',
        type: 'string',
      },
    },
  };

  settingsUser = {
    hideSubHeader: false,
    actions: false,
    columns: {
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
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
      isValidated: {
        title: 'Is validated',
        type: 'string',
      },
    },
  };

  constructor(
    private taskService: UserTaskService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<CreateTaskComponent>,
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

  ngOnInit() {

    if(this.user.rol=="User"){
      this.settings = this.settingsUser;
    }
    else{
      this.settings = this.settingsAdminTL;
    }

    this.taskService.getTasksByRequirementId(this.requirement.id.toString()).subscribe((data) => {
      this.source = new LocalDataSource(data);
    });
    //console.log(this.requirement);
  }

  open() {
    this.dialogService.open(CreateTaskInListTaskComponent, { context: { requirement: this.requirement } })
      .onClose.subscribe((data) => {
        if (data) {
          this.source.prepend(data);
        }
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
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.taskService.update(event.newData).
        subscribe(data => this.showToast('Task updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  dismiss() {
    this.ref.close();
  }

}
