import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Guid } from 'guid-typescript';
import { PasswordChange } from '../models/passwordChange.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<Employee[]> {
    return this.apiService.get('api/Employee');
  }

  
  create(employee: Employee): Observable<Employee> {
    return this.apiService.post('api/accounts', employee);
  }
  

  destroy(employeeId: string): Observable<boolean> {
    return this.apiService.delete('api/Employee/' + employeeId);
  }

  update(employee: Employee) {
    return this.apiService.put('api/Employee/', employee);
  }

  getById(employeeId: Guid): Observable<Employee> {
    return this.apiService.get('api/Employee/' + employeeId);
  }

  changePassword(passwordchange: PasswordChange){
    return this.apiService.put('api/accounts', passwordchange);

  }
  resetPassword(passwordChange: PasswordChange){
    return this.apiService.put('/api/Accounts/PutAsyncReset',passwordChange)
  }

}
