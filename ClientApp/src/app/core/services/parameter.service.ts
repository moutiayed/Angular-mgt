import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Parameter } from '../models/parameter.model';
import { Guid } from 'guid-typescript';
@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<Parameter[]> {
    return this.apiService.get('api/Parameter');
  }

  
  create(parameter: Parameter): Observable<Parameter> {
    return this.apiService.post('api/Parameter', parameter);
  }
  

  destroy(parameterId: string): Observable<boolean> {
    return this.apiService.delete('api/Parameter/' + parameterId);
  }

  update(parameter: Parameter) {
    return this.apiService.put('api/Parameter/', parameter);
  }

  getById(parameterId: Guid): Observable<Parameter> {
    return this.apiService.get('api/Parameter/' + parameterId);
  }
  getByGroup(group:string):Observable<Parameter[]>{
      return this.apiService.get('api/Parameter/'+ group);
  }
  getGroup():Observable<string[]>{
    return this.apiService.get('api/Parameter/Groups/');
  }

}
