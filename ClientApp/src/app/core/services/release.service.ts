import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Release } from '../models/release.model';
@Injectable({
    providedIn: 'root'
  })
  export class ReleaseService {

    constructor(
      private apiService: ApiService
    ) { }
  
    getAll(): Observable<Release[]> {
      return this.apiService.get('api/Release');
    }
  
    create(release: Release): Observable<Release> {
      return this.apiService.post('api/Release/', release);
    }
  
    destroy(releaseId: string): Observable<boolean> {
      return this.apiService.delete('api/Release/' + releaseId);
    }
  
    update(release: Release) {
      return this.apiService.put('api/Release/', release);
    }
  
  }