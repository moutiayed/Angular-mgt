import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { Guid } from 'guid-typescript';
import { NbTrigger } from '@nebular/theme';

@Injectable()
export class CustomServerDataSource extends LocalDataSource {
    idUser: Guid;
    lastRequestCount: number = 0;

    constructor(protected http: HttpClient, idUser: Guid) {
        super();
        this.idUser=idUser;
    }

    count(): number {
        return this.lastRequestCount;
    }

    getElements(): Promise<any> {
        let url = 'http://localhost:5001/api/UserTask/byUser/' + this.idUser;

        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) { //pagination
            url += `/${this.pagingConf['page']}/${this.pagingConf['perPage']}?`;
        }

        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                url += `/${fieldConf.field}/${fieldConf.direction.toUpperCase()}?`; //sort
            });
        }

        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf) => {
                if (fieldConf['search']) {
                    url += `/${fieldConf['field']}/${fieldConf['search']}?`; //search
                }
            });
        }

        return this.http.get(url, { observe: 'response' })
            .pipe(
                map(res => {
                    this.lastRequestCount = +res.headers.get('x-total-count');
                    return res.body;
                })
            ).toPromise();
    }

}