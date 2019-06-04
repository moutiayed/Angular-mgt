import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { Customer } from 'src/app/core/models/customer.model';
import { AssignUserToTeamComponent } from '../modals/usersmanagement-modals/assign-user-to-team/assign-user-to-team.component';
import { Team } from 'src/app/core/models/team.model';
import { AssignedUsersToTeamComponent } from '../modals/usersmanagement-modals/assigned-users-to-team/assigned-users-to-team.component';

@Component({
  selector: 'app-button-view',
  template: `
<button nbButton hero status="success" (click)="onClick()">
Assigned Users
</button>`,
  styles: [`i {font-size: 1rem;}`],
})

export class ButtonListEmployeesTeamRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;

  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() rowData: Team;

  @Output() action = new EventEmitter();

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
     this.dialogService.open(AssignedUsersToTeamComponent, { context: { team: this.rowData } });
  }

}
