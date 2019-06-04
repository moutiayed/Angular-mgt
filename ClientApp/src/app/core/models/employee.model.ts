import { Guid } from 'guid-typescript';
import { ContractRate } from './contractrate.model';
export class Employee {
    id?: Guid;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updatedBy?: string;
    identityId?: Guid;
    startDate?: string;
    adress?: string;
    birthday?: string;
    cin?: string;
    city?: string;
    civilStatus?: string;
    function?: string;
    phoneNumber?: string;
    registrationNumber?: string;

    firstName?: string;
    lastName?: string;
    email?: string;
    userName?: string;
    password?: string;
    contractrate:ContractRate[];
    role:string;
    
}
