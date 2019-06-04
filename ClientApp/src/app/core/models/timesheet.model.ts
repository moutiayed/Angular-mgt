import { Guid } from 'guid-typescript';

export class Timesheet {
    id?: Guid;
    creationDate?: string;
    createdBy?: string;
    updateDate?: string;
    updatedBy?: string;
    userId?: Guid;
    date?: string;
    duration?: number;
    comment?: string;
    isGuard?: string;
    billable?: string;
    userTaskId?: Guid;

    userTaskDescription?: string;

    userTaskRequirementNom?: string;
}
