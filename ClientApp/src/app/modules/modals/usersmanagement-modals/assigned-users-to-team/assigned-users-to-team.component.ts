import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Team } from 'src/app/core/models/team.model';
import { TeamUserService } from 'src/app/core/services/teamUser.service';

@Component({
  selector: 'app-assigned-users-to-team',
  templateUrl: './assigned-users-to-team.component.html',
  styleUrls: ['./assigned-users-to-team.component.css']
})
export class AssignedUsersToTeamComponent implements OnInit {
  sourceEmployee: LocalDataSource;
  team = new Team(); // passed row from team table
  constructor(protected ref: NbDialogRef<AssignedUsersToTeamComponent>,
    private teamUserService: TeamUserService,
    private toastrService: NbToastrService) { }

  settingsEmployee = {
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
      /*birthday: {
        title: 'Birthday',
        type: 'string',
      },
      adress: {
        title: 'Adress',
        type: 'string',
      },
      /*cin: {
        title: 'Cin',
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
      },registrationNumber: {
        title: 'Registration Number',
        type: 'string',
      },*/
      email: {
        title: 'Email',
        type: 'string',
      },
    },
  };

  ngOnInit() {
    // get Employees list of a certain team passed from parent component
    this.teamUserService.GetAllByTeamId(this.team.id.toString()).subscribe((data) => { // for table employee
      this.sourceEmployee = new LocalDataSource(data);
    });
  }

  dismiss() {
    this.ref.close();
  }

   onDeleteConfirm(event): void {
      console.log(event.data.id);
      console.log(this.team.id.toString());
    if (window.confirm('Are you sure you want to delete?')) {
      this.teamUserService.RemoveEmployeeFromTeam(event.data.id, this.team.id.toString()).
         subscribe(data => this.showToast('User Removed from team successfully', 'Success'));
       event.confirm.resolve();
    } else {
       event.confirm.reject();
     }
   }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

}
