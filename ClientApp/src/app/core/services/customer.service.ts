import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { CreateCustomer } from 'src/app/management-tool/timesheet/modal/create-customer.model';
import { Guid } from 'guid-typescript';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<Customer[]> {
    return this.apiService.get('api/Customer');
  }

  create(customer: CreateCustomer): Observable<Customer> {
    return this.apiService.post('api/Customer/', customer);
  }

  destroy(customerId: string): Observable<boolean> {
    return this.apiService.delete('api/Customer/' + customerId);
  }

  update(customer: Customer) {
    return this.apiService.put('api/Customer/', customer);
  }

  getById(customerId: Guid): Observable<Customer> {
    return this.apiService.get('api/Customer/' + customerId);
  }

}
