import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Rate } from '../models/rate.model';
import { Guid } from 'guid-typescript';

@Injectable({
    providedIn: 'root'
  })
  export class RateService {

    constructor(
      private apiService: ApiService
    ) { }
  
    getAll(): Observable<Rate[]> {
      return this.apiService.get('api/Rate');
    }
  
    create(rate: Rate): Observable<Rate> {
      return this.apiService.post('api/Rate/', rate);
    }
  
    destroy(rateId: string): Observable<boolean> {
      return this.apiService.delete('api/Rate/' + rateId);
    }
  
    update(rate: Rate) {
      return this.apiService.put('api/Rate/', rate);
    }
    getRatesByEmployeeId(employeeId: Guid): Observable<Rate[]> {
        return this.apiService.get('api/Rate/byEmployee/' + employeeId);
      }
  
  }