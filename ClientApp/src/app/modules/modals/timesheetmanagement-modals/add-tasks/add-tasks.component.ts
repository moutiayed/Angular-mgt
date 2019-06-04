import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbDialogService, NbToastrService, NbDialogRef } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { UserTask } from 'src/app/core/models/userTask.model';
import { TimesheetTaskWeek } from 'src/app/core/models/timesheetTaskWeek.models';
import { TimesheetService } from 'src/app/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  @Input() startWeek: string;

  idx; // index for splice

  source: LocalDataSource;

  sourceTimesheet: LocalDataSource;

  user: UserPayload; // this variable will store the token payload

  tasksToTimesheet: UserTask[]; // list of selected tasks to add to timesheet

  tasksInTimesheet: TimesheetTaskWeek[];

  timesheetElement: TimesheetTaskWeek; // selected row from table

  bool: boolean;

  tasksInTimesheetToAdd: TimesheetTaskWeek;
  tasksInTimesheetToAddArr: TimesheetTaskWeek[] = [];
  settings = {
    selectMode: 'multi',
    pager: {
      display: true,
      perPage: 5
    },
    hideSubHeader: false,
    actions: {
      add: false,
      edit: true,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      description: {
        title: 'Task Description',
        type: 'string',
        editable: false,
      },
      isGuard: {
        title: 'Is Guard',
        editor: {
          type: 'list',
          config: {
            selectText: ' ',
            list: [
              { value: 'true', title: 'True' },
              { value: 'false', title: 'False' },
            ],
          },
        },
      },
      billable: {
        title: 'Is Billable',
        editor: {
          type: 'list',
          config: {
            selectText: ' ',
            list: [
              { value: 'true', title: 'True' },
              { value: 'false', title: 'False' },
            ],
          },
        },
      },
    }
  }

  constructor(
    private taskService: UserTaskService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<AddTasksComponent>,
    private authService: NbAuthService,
    private timesheetService: TimesheetService,
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

      });

  }

  ngOnInit() {

    //init bool
    this.bool = true;

    //init list
    this.tasksToTimesheet = [];

    //getAllValidated by user
    this.taskService.GetAllValidatedByIdUser(this.user.id.toString()).subscribe((data) => {
      this.source = new LocalDataSource(data);
    });

    //getAllTsByUser
    this.timesheetService.GetWeekTsByUser(this.user.id.toString(), this.startWeek).subscribe((data) => {
      this.sourceTimesheet = new LocalDataSource(data);
      this.tasksInTimesheet = data;
    });
  }

  add() {
    //compare between tasks in sourceTimesheet and tasksToTimesheet
    //Ajouter les tasks qui sont différent(task,isguard,billable) à source Timesheet;

    if (this.tasksInTimesheet.length == 0) {//if timesheet element is empty
      if (this.tasksToTimesheet.length != 0) {
        this.tasksToTimesheet.forEach(value => {
          // 1/1 ADD IN SMART TABLE
          this.tasksInTimesheetToAdd = {
            id: null,
            requirementName: value.requirementNom,
            taskType: value.type,
            userTaskId: value.id,
            taskDescription: value.description,
            weekStartDate: this.startWeek,
            isGuard: <boolean><unknown>value.isGuard,
            billable: <boolean><unknown>value.billable,
            day1: "null",
            day2: "null",
            day3: "null",
            day4: "null",
            day5: "null",
            day6: "null",
            day7: "null",
            userId: this.user.id,
          };
          this.tasksInTimesheetToAddArr.push(this.tasksInTimesheetToAdd);
        });
        this.ref.close(this.tasksInTimesheetToAddArr);
      }
    } else {
      this.tasksToTimesheet.forEach(element1 => {
        this.bool = true;
        this.tasksInTimesheet.forEach(element2 => {
          if (element1.id == element2.userTaskId
            && (element1.isGuard == "true") == element2.isGuard
            && (element1.billable == "true") == element2.billable) {
            this.bool = false;
          }
        });
        if (this.bool == true) {
          // 1/2 ADD IN SMART TABLE
          this.tasksInTimesheetToAdd = {
            id: null,
            requirementName: element1.requirementNom,
            taskType: element1.type,
            userTaskId: element1.id,
            taskDescription: element1.description,
            weekStartDate: this.startWeek,
            isGuard: <boolean><unknown>element1.isGuard,
            billable: <boolean><unknown>element1.billable,
            day1: "null",
            day2: "null",
            day3: "null",
            day4: "null",
            day5: "null",
            day6: "null",
            day7: "null",
            userId: this.user.id,
          };
          this.tasksInTimesheetToAddArr.push(this.tasksInTimesheetToAdd);
        }
        else {
          //console.log("it exists already.");
          this.showToast('danger','Task/Tasks already exists');
        }
      });
      this.ref.close(this.tasksInTimesheetToAddArr);
    }
  }

  dismiss() {
    this.ref.close();
  }

  rowClicked(event) {
    if (!this.tasksToTimesheet.includes(event.data)) {
      this.tasksToTimesheet.push(event.data); // add it into the list
    } else {
      if (this.tasksToTimesheet.includes(event.data)) {
        this.idx = this.tasksToTimesheet.indexOf(event.data);
        this.tasksToTimesheet.splice(this.idx, 1);
      }
    }
  }

  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }

}
