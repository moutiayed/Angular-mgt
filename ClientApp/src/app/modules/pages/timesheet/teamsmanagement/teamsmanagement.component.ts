import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { CreateTeamComponent } from 'src/app/modules/modals/teamsmanagement/create-team/create-team.component';
import { AssignUserToTeamComponent } from 'src/app/modules/modals/usersmanagement-modals/assign-user-to-team/assign-user-to-team.component';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/team.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ButtonListEmployeesRenderComponent } from 'src/app/modules/renderers/button-list-employees-render.component';
import { ButtonListEmployeesTeamRenderComponent } from 'src/app/modules/renderers/button-list-employees-team-render.component';
import { NbAccessChecker } from '@nebular/security';

@Component({
  selector: 'app-teamsmanagement',
  templateUrl: './teamsmanagement.component.html',
  styleUrls: ['./teamsmanagement.component.css']
})
export class TeamsmanagementComponent implements OnInit {
  public teams: Team[] = [];
  public source: LocalDataSource;

  constructor(
    private teamService: TeamService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker) { }

  settings = {
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
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
        editor: { //here is values on update which are static !!!!
          type: 'list',
          config: {
            selectText: ' ',
            list: [
              { value: 'Retail Support', title: 'Retail Support' },
              { value: 'SAP Supply Chain', title: 'SAP Supply Chain' },
              { value: 'Retail Developement', title: 'Retail Developement' },
            ],
          },
        },
      },
      button: {
        title: 'Assign Users',
        type: 'custom',
        filter: false,
        renderComponent: ButtonListEmployeesRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        },
        editable: false,
      },
      button2: {
        title: 'Assigned Users',
        type: 'custom',
        filter: false,
        renderComponent: ButtonListEmployeesTeamRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        },
        editable: false,
      },
    },
  };

  ngOnInit() {
    this.teamService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
    });
  }

  open() {
    this.dialogService.open(CreateTeamComponent)
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
      this.teamService.destroy(event.data.id).
        subscribe(data => this.showToast('Team deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.teamService.update(event.newData).
        subscribe(data => this.showToast('Team updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
