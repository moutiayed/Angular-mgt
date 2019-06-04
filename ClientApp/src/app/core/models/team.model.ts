import { Guid } from 'guid-typescript';

export class Team {
    id?: Guid;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updatedBy?: string;
    name?: string;
    type?: string;
    description?: string;
}
