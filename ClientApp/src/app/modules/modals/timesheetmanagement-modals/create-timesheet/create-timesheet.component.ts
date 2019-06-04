import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { TimesheetService } from 'src/app/core/services/timesheet.service';
//import { Timesheet } from 'src/app/core/models/timesheet.model';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { LocalDataSource } from 'ng2-smart-table';
import { UserTask } from 'src/app/core/models/userTask.model';
@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
  styleUrls: ['./create-timesheet.component.css']
})
export class CreateTimesheetComponent implements OnInit {
  //timesheet = new Timesheet();
  dateTimesheet = new Date();
  idUT;
  public userTasks = [];
  userTask: UserTask;
  user: UserPayload; // this variable will store the token payload
  ///////////////////////// For Task ////////////////////////////
  public sourceTask: LocalDataSource;
  settingsTask = {
    pager: {
      display: true,
      perPage: 3
    },
    hideSubHeader: false,
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      description: {
        title: 'Description',
        type: 'string',
        filter: true
      },
      status: {
        title: 'Status',
        type: 'string',
        filter: false
      },
      closingDate: {
        title: 'Closing Date',
        type: 'string',
        filter: true
      },
      estimateWorkLoad: {
        title: 'Estimated WorkLoad',
        type: 'string',
        filter: true
      },
      tofinalise: {
        title: 'To Finalise',
        type: 'string',
        filter: true
      },
      requirementNom: {
        title: 'Requirement Name',
        type: 'string',
        filter: true
      },
      isValidated: {
        title: 'Is validated',
        type: 'string',
        filter: true
      },
    },

  };
  //////////////////////////////////// FOR TASK ////////////////////////////////
  constructor(
    protected ref: NbDialogRef<CreateTimesheetComponent>,
    private timesheetService: TimesheetService,
    private userTaskService: UserTaskService,
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
  ngOnInit() {
    this.userTaskService.getAll()
      .subscribe(
        data => this.sourceTask = new LocalDataSource(data) // For task table
      );
  }

  /*create() {
    this.timesheet.date = this.dateTimesheet.toDateString();
    this.timesheet.userTaskId = this.idUT; // id userTask from combo box
    this.timesheet.userId = this.user.id; // id user from payload
    this.timesheetService.create(this.timesheet).
      subscribe(timesheet => {
        this.ref.close(timesheet);
      });
  }*/

  dismiss() {
    this.ref.close();
  }

  rowClicked(event) { // select row from table
    this.userTask = event.data;
    // console.log(this.userTask);
    this.reloadComboTask(); // reload combo box method to display selected row
    }

    reloadComboTask() { // combo box reload on select row from table
      this.userTasks = [];
      this.userTasks.push(this.userTask);
      this.idUT = this.userTask.id;
    }
}
