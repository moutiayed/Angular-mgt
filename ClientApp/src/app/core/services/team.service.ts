import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { CreateTeam } from 'src/app/management-tool/timesheet/modal/create-team.model';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<Team[]> {
    return this.apiService.get('api/Team');
  }


  create(team: CreateTeam): Observable<Team> {
    return this.apiService.post('api/Team/', team);
  }

  destroy(teamId: string): Observable<boolean> {
    return this.apiService.delete('api/Team/' + teamId);
  }

  update(team: Team) {
    return this.apiService.put('api/Team/', team);
  }

}
