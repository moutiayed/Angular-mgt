import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbDialogService, NbToastrService, NbDialogRef } from '@nebular/theme';
import { UserTask } from 'src/app/core/models/userTask.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-validate-tasks',
  templateUrl: './validate-tasks.component.html',
  styleUrls: ['./validate-tasks.component.css']
})
export class ValidateTasksComponent implements OnInit {
  idx; // index for splice
  source: LocalDataSource;
  tasksToValidate: UserTask[]; // list of selected tasks (not validated)

  settings = {
    selectMode: 'multi',
    pager: {
      display: true,
      perPage: 5
    },
    hideSubHeader: false,
    actions: {
      add: false,
      edit: false,
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
      userFullName: {
        title: 'User Name',
        type: 'string',
      },
      requirementNom: {
        title: 'Requirement Name',
        type: 'string',
      },
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
    protected ref: NbDialogRef<ValidateTasksComponent>,
    private datePipe: DatePipe, //For Date format
  ) { }

  ngOnInit() {
    this.tasksToValidate = [];
    this.taskService.getAllNotValidated().subscribe((data) => {
      this.source = new LocalDataSource(data);
    });
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

  create() {
    this.tasksToValidate.forEach(task => {
      task.isValidated = "True"
      this.taskService.update(task).
        subscribe(userTask => {
          this.ref.close(userTask);
        });
    });
  }

  rowClicked(event) {
    if (!this.tasksToValidate.includes(event.data)) {
      this.tasksToValidate.push(event.data); // add it into the list
    } else {
      if (this.tasksToValidate.includes(event.data)) {
        this.idx = this.tasksToValidate.indexOf(event.data);
        this.tasksToValidate.splice(this.idx, 1);
      }
    }
  }

}
