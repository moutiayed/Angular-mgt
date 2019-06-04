import { Guid } from 'guid-typescript';

export class TeamUser {
    id?: Guid;
    creationDate?: string;
    createdBy?: string;
    updateDate?: string;
    updatedBy?: string;
    userId?: Guid;
    teamId?: Guid;
}
