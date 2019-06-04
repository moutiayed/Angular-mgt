import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Contract } from '../models/contract.model';
import { Observable } from 'rxjs';
import { CreateContract } from 'src/app/management-tool/timesheet/modal/create-teamUser.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<Contract[]> {
    return this.apiService.get('api/Contract');
  }

  create(contract: CreateContract): Observable<Contract> {
    return this.apiService.post('api/Contract/', contract);
  }

  destroy(contractId: string): Observable<boolean> {
    return this.apiService.delete('api/Contract/' + contractId);
  }

  update(contract: Contract) {
    return this.apiService.put('api/Contract/', contract);
  }

  getContractsByCustomerId(customerId: string): Observable<Contract[]> {
    return this.apiService.get('api/Contract/byCustomers/' + customerId);
  }

}
