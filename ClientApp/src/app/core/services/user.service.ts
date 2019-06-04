import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { CreateUser } from 'src/app/management-tool/timesheet/modal/create-user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
public a: any ;

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<User[]> {
    return this.apiService.get('api/User');
  }

  create(user: CreateUser): Observable<User> {
    return this.apiService.post('api/User/', user);
  }

  destroy(userId: string): Observable<boolean> {
    return this.apiService.delete('api/User/' + userId);
  }

  update(user: User) {
    return this.apiService.put('api/User/', user);
  }

}
