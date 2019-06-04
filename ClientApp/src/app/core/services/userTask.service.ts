import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UserTask } from '../models/userTask.model';
import { CreateUserTask } from 'src/app/management-tool/timesheet/modal/create-userTask.model';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<UserTask[]> {
    return this.apiService.get('api/UserTask');
  }

  create(userTask: CreateUserTask): Observable<UserTask> {
    return this.apiService.post('api/UserTask/', userTask);
  }

  destroy(userTaskId: string): Observable<boolean> {
    return this.apiService.delete('api/UserTask/' + userTaskId);
  }

  update(userTask: UserTask) {
    return this.apiService.put('api/UserTask/', userTask);
  }

  getTasksByRequirementId(requirementId: string): Observable<UserTask[]> {
    return this.apiService.get('api/UserTask/byRequirements/' + requirementId);
  }

  getById(idUser: string): Observable<UserTask[]> { //all tasks
    return this.apiService.get('api/UserTask/byUser/' + idUser);
  }

  //get all tasks which are not validated
  getAllNotValidated(): Observable<UserTask[]> {
    return this.apiService.get('api/UserTask/UserTaskNotValidated');
  }

  getAllValidatedByIdUserOtherReq(idUser: string): Observable<UserTask[]> {
    return this.apiService.get('api/UserTask/UserTaskValidatedByUser/'+ idUser);
  }

  //get all tasks which are not validated by user Id
  GetAllValidatedByIdUser(idUser: string): Observable<UserTask[]> {
    return this.apiService.get('api/UserTask/UserTaskValidatedByUser/'+ idUser);
  }

  //get all tasks which are not assgnied to any one ( public holiday etc ... )
  GetAllOtherTasks(): Observable<UserTask[]> {
    return this.apiService.get('api/UserTask/OtherTasks');
  }
  
}
