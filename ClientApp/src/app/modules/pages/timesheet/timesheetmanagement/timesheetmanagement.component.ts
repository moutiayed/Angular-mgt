import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService, NbCalendarRange, NbDateService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { TimesheetService } from 'src/app/core';
import { NbAccessChecker } from '@nebular/security';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { CustomEditorDurationCommentComponent } from 'src/app/modules/renderers/custom-editor-duration-comment.component';
import { CustomRenderDurationCommentComponent } from 'src/app/modules/renderers/custom-render-duration-comment.component';
import { TimesheetTaskWeek } from 'src/app/core/models/timesheetTaskWeek.models';
import { AddTasksComponent } from 'src/app/modules/modals/timesheetmanagement-modals/add-tasks/add-tasks.component';
import { AddOtherTaskComponent } from 'src/app/modules/modals/timesheetmanagement-modals/add-other-task/add-other-task.component';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { UserTask } from 'src/app/core/models/userTask.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-timesheetmanagement',
  templateUrl: './timesheetmanagement.component.html',
  styleUrls: ['./timesheetmanagement.component.css']
})
export class TimesheetmanagementComponent implements OnInit {

  ////////////////////////// Calendar ///////////////////////////////////////
  range: NbCalendarRange<Date>;
  boundingMonthValue: boolean = false;
  ///////////////////////////////////////////////////////////////////////////
  timesheets: TimesheetTaskWeek[] = [];
  source: LocalDataSource;
  dates: any[];
  newSettings;
  user: UserPayload; // this variable will store the token payload
  timesheetElement: TimesheetTaskWeek; // selected row from table
  comment: string;
  weekDates: any[];
  ////////////////////////// Combo box user /////////////////////////////////
  idE;
  employees = [];
  ///////////////////////////////////////////////////////////////////////////
  constructor(
    private timesheetService: TimesheetService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    private employeeService: EmployeeService, //Get All Users For Combo box
    protected dateService: NbDateService<Date>) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

      });
    //////////////////////// Calendar /////////////////////////////////////
    var d = { 'start': new Date() };
    this.handleRangeChange(d);
    ///////////////////////////////////////////////////////////////////////
  }

  //init settings of the table
  settings = {};

  ngOnInit() {
    this.reload();
  }

  reload() {
    if (this.user.rol != "User") {
      this.employeeService.getAll().subscribe((data) => { //get list of all users for combo box
        this.employees = data;
      });
    }

    if (this.idE == null) {
      this.timesheetService.GetWeekTsByUser(this.user.id.toString(), this.weekDates[0]).subscribe((data) => {
        this.source = new LocalDataSource(data);
      });
    } else {
      this.timesheetService.GetWeekTsByUser(this.idE, this.weekDates[0]).subscribe((data) => {
        this.source = new LocalDataSource(data);
      });
    }

    this.newSettings = {
      pager: {
        display: true,
        perPage: 10
      },
      hideSubHeader: false,
      actions: {
        add: false,
        edit: true,
        delete: false
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
      columns:
      {
        requirementName: {
          title: 'Requirement',
          type: 'string',
          editable: false,
        },
        taskDescription: {
          title: 'Description',
          type: 'string',
          editable: false,
        },
        taskType: {
          title: 'Type',
          type: 'string',
          editable: false,
        },
        isGuard: {
          title: 'Guard',
          type: 'string',
          editable: false,
        },
        billable: {
          title: 'Billable',
          type: 'string',
          editable: false,
        },
        day1: {
          title: 'Lun ' + this.weekDates[0],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day2: {
          title: 'Mar ' + this.weekDates[1],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day3: {
          title: 'Mer ' + this.weekDates[2],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day4: {
          title: 'Jeu ' + this.weekDates[3],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day5: {
          title: 'Ven ' + this.weekDates[4],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day6: {
          title: 'Sam ' + this.weekDates[5],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day7: {
          title: 'Dim ' + this.weekDates[6],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
      }
    }
    this.settings = Object.assign({}, this.newSettings);
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  //add, update and delete methods
  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      event.newData.userId = this.user.id;
        this.timesheetService.update(event.newData)
          .subscribe(data => this.showToast('Operation done successfully', 'Success'));
        event.confirm.resolve();
        this.reload();
        this.reload();
        this.reload();
        //console.log(this.timesheetService.GetSumDurationsTask(event.newData.userTaskId).subscribe(data=>data));
        //update task to set new toFinalise

    } else {
      event.confirm.reject();
    }
    this.reload();
  }

  rowClicked(event) { // select row from table
    this.timesheetElement = event.data;
  }

  ///////////////////////// Calendar ///////////////////////////////
  handleRangeChange(date) {
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = date.start;
    var TodayDay = Wday[day.getDay()];
    switch (TodayDay) {

      case "Monday": {
        this.range = {
          start: this.dateService.addDay(date.start, 0),
          end: this.dateService.addDay(date.start, 6),
        };
        break;
      }
      case "Tuesday": {
        this.range = {
          start: this.dateService.addDay(date.start, -1),
          end: this.dateService.addDay(date.start, 5),
        };
        break;
      }

      case "Wednesday": {
        this.range = {
          start: this.dateService.addDay(date.start, -2),
          end: this.dateService.addDay(date.start, 4),
        };
        break;
      }
      case "Thursday": {
        this.range = {
          start: this.dateService.addDay(date.start, -3),
          end: this.dateService.addDay(date.start, 3),
        };
        break;
      }
      case "Friday": {
        this.range = {
          start: this.dateService.addDay(date.start, -4),
          end: this.dateService.addDay(date.start, 2),
        };
        break;
      }
      case "Saturday": {
        this.range = {
          start: this.dateService.addDay(date.start, -5),
          end: this.dateService.addDay(date.start, 1),
        };
        break;
      }
      case "Sunday": {
        this.range = {
          start: this.dateService.addDay(date.start, -6),
          end: this.dateService.addDay(date.start, 0),
        };
        break;
      }
    }

    var SelectedWeek: string[] = [];
    for (var i = 0; i < 7; i++) {
      var theday = this.dateService.addDay(this.range.start, i);
      var dd = this.dateService.getDate(theday);
      var mm = this.dateService.getMonth(theday) + 1; // January start = 0
      var yy = this.dateService.getYear(theday);
      //format souhaitée
      SelectedWeek.push(yy + "-" + mm + "-" + dd);
    }
    this.weekDates = SelectedWeek;
    this.reload();
  }
  ////////////////////////////////////////////////////////////////////////////////
  openAddTasks() {
    this.dialogService.open(AddTasksComponent, { context: { startWeek: this.weekDates[0] } })
      .onClose.subscribe((data) => {
        if (data) {
          data.forEach(element => {
            this.source.prepend(element);
            this.showToast('Task/Tasks added successfully', 'Success');
          });
        }
      });
  }

  openAddOtherTasks() {
    this.dialogService.open(AddOtherTaskComponent, { context: { startWeek: this.weekDates[0] } })
      .onClose.subscribe((data) => {
        if (data) {
          data.forEach(element => {
            this.source.prepend(element);
            this.showToast('Other Task/Tasks added successfully', 'Success');
          });
        }
      });
  }

}
