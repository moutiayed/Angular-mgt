import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { TeamUser } from 'src/app/core/models/teamUser.model';
import { TeamUserService } from 'src/app/core/services/teamUser.service';
import { Employee } from 'src/app/core/models/employee.model';
import { Team } from 'src/app/core/models/team.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-assign-user-to-team',
  templateUrl: './assign-user-to-team.component.html',
  styleUrls: ['./assign-user-to-team.component.css']
})
export class AssignUserToTeamComponent implements OnInit {
  sourceTeam: LocalDataSource;
  teamUser = new TeamUser(); // teamUser to add
  team = new Team(); // passed row from team table
  employeesSelected: Employee[]; // list of selected employees
  idx; // index for splice
  listeEmployeesNA: LocalDataSource; // list of employees not assigned to a team

  constructor(
    protected ref: NbDialogRef<AssignUserToTeamComponent>,
    private teamUserService: TeamUserService,
    private datePipe: DatePipe, //For Date format
    ) { }

  settingsEmployee = {
    selectMode: 'multi',
    pager: {
      display: true,
      perPage: 5
    },
    hideSubHeader: false,
    actions: false,
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      /*birthday: {
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
      city: {
        title: 'City',
        type: 'string',
      },*/
      function: {
        title: 'Function',
        type: 'string',
      },
      phoneNumber: {
        title: 'Phone Number',
        type: 'string',
      },
      /*civilStatus: {
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
      },*/
      email: {
        title: 'Email',
        type: 'string',
      },
    },
  };

  ngOnInit() {
    this.employeesSelected = [];

    // display employees which are not assigned to the team
    this.teamUserService.GetAllNotAssignedByTeamId(this.team.id.toString()).
    subscribe((data) => {
      this.listeEmployeesNA = new LocalDataSource(data);
    });
  }

  create() {
    this.teamUser.teamId = this.team.id;
    this.employeesSelected.forEach(employee => {
      this.teamUser.userId = employee.id;
      this.teamUserService.create(this.teamUser).
        subscribe(teamUser => {
          this.ref.close(teamUser);
        });
    });
  }

  rowClicked(event) {
    if (!this.employeesSelected.includes(event.data)) {
      this.employeesSelected.push(event.data); // add it into the list
    } else {
      if (this.employeesSelected.includes(event.data)) {
        this.idx = this.employeesSelected.indexOf(event.data);
        this.employeesSelected.splice(this.idx, 1);
      }
    }
  }

  dismiss() {
    this.ref.close();
  }

}
