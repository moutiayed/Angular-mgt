import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';

@Injectable()
export class CustomServerDataSource extends LocalDataSource {

    lastRequestCount: number = 0;

    constructor(protected http: HttpClient) {
        super();
    }

    count(): number {
        return this.lastRequestCount;
    }

    getElements(): Promise<any> {
        let url = 'http://localhost:5001/api/Requirement/';

        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) { //pagination
            url += `${this.pagingConf['page']}/${this.pagingConf['perPage']}?`;
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