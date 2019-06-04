import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { TeamService } from 'src/app/core/services/team.service';
import { Team } from 'src/app/core/models/team.model';
import { ParameterService } from 'src/app/core/services/parameter.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  TypeSelectHasError=true;
  team = new Team();
  parameterstype: any[];
  constructor(protected ref: NbDialogRef<CreateTeamComponent>,
    private teamService: TeamService,
    private parameterService: ParameterService
    ) { }

  ngOnInit() {
    this.parameterService.getByGroup("TeamsType")
    .subscribe(data=>this.parameterstype=data);
  }

  create() {
    this.teamService.create(this.team).
      subscribe(team => {
        this.ref.close(team);
      });
  }

  dismiss() {
    this.ref.close();
  }
  TypeValidateSelect(value) {
    if (!value) {
      this.TypeSelectHasError = true;
    } else {
      this.TypeSelectHasError = false;
    }
  }
}
