import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Injectable()
export class ApiService {
  token;


  constructor(
    private http: HttpClient,
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.token = token.getValue(); // here we receive a payload from the token and assigne it to our `user` variable 
        }
      });

  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })

    return this.http.get(path, { headers: myHeaders });

  }

  put(path: string, body: any): Observable<any> {
    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
    return this.http.put(
      path,
      body, { headers: myHeaders }
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any): Observable<any> {
    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
    return this.http.post(
      path,
      body, { headers: myHeaders }
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
    return this.http.delete(
      path, { headers: myHeaders }
    ).pipe(catchError(this.formatErrors));
  }

  put2(path: string, body: any): Observable<any> {
    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
    return this.http.put(
      path,
      body, { headers: myHeaders }
    ).pipe(catchError(this.formatErrors));
  }

}
