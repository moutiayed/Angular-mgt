import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Requirement } from '../models/requirement.model';
import { Observable } from 'rxjs';
import { CreateRequirement } from 'src/app/management-tool/timesheet/modal/create-requirement.model';
@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<Requirement[]> {
    return this.apiService.get('api/Requirement');
  }

  create(requirement: CreateRequirement): Observable<Requirement> {
    return this.apiService.post('api/Requirement/', requirement);
  }

  destroy(requirementId: string): Observable<boolean> {
    return this.apiService.delete('api/Requirement/' + requirementId);
  }

  update(requirement: Requirement) {
    return this.apiService.put('api/Requirement/', requirement);
  }

  GetAllByEmployeeId(employeeId: string): Observable<Requirement[]> {
    return this.apiService.get('api/Requirement/byEmployees/' + employeeId);
  }

}
