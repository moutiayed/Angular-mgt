import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { CreateTeam } from 'src/app/management-tool/timesheet/modal/create-team.model';
import { TeamUser } from '../models/teamUser.model';
import { CreateTeamUser } from 'src/app/management-tool/timesheet/modal/create-contract.model.1';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class TeamUserService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<TeamUser[]> {
    return this.apiService.get('api/TeamUser');
  }

  create(team: CreateTeamUser): Observable<TeamUser> {
    return this.apiService.post('api/TeamUser/', team);
  }

  destroy(teamUserId: string): Observable<boolean> {
    return this.apiService.delete('api/TeamUser/' + teamUserId);
  }

  update(teamUser: TeamUser) {
    return this.apiService.put('api/TeamUser/', teamUser);
  }

  GetAllByTeamId(teamUserId: string): Observable<Employee[]> {
    return this.apiService.get('api/TeamUser/byTeam/' + teamUserId);
  }

  GetAllNotAssignedByTeamId(idTeam: string): Observable<Employee[]> {
    return this.apiService.get('api/TeamUser/byTeamNA/' + idTeam);
  }

  RemoveEmployeeFromTeam(employeeId: string, teamId: string): Observable<boolean> {
     return this.apiService.delete('api/TeamUser/' + employeeId + '/' + teamId);
  }


}
