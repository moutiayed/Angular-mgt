import { Guid } from 'guid-typescript';

export class Customer {
    id?: Guid;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updatedBy?: string;
    name?: string;
    adress?: string;
    phoneNumber?: string;
    mail?: string;
    description?: string;
}
