import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CreateTimesheet } from 'src/app/management-tool/timesheet/modal/create-timesheet.model';
import { TimesheetTaskWeek } from '../models/timesheetTaskWeek.models';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<TimesheetTaskWeek[]> {
    return this.apiService.get('api/TimeSheetElement');
  }

  create(timesheet: CreateTimesheet): Observable<TimesheetTaskWeek> {
    return this.apiService.post('/api/TimeSheetElement/', timesheet);
  }

  getById(idUser: string): Observable<TimesheetTaskWeek[]> { //all timesheet By User
    return this.apiService.get('api/TimeSheetElement/byUser/' + idUser);
  }

  //[HttpGet("byUser/{idUser}/{startDate}")]
  GetWeekTsByUser(idUser: string, startDate: string): Observable<TimesheetTaskWeek[]> { //all timesheet By User with startDate
    return this.apiService.get('api/TimeSheetElement/byUser/' + idUser + '/' + startDate);
  }

  //AddTsByWeek
  update(timesheet: string): Observable<TimesheetTaskWeek>{
    return this.apiService.post('api/TimeSheetElement/AddTsByWeek/', timesheet);
  }

  // Get: api/UserTask/GetSumDurationsTask
  GetSumDurationsTask(taskId: string)
  {
      return this.apiService.get('api/TimeSheetElement/GetSumDurationsTask/'+ taskId);
  }

}


