import { Guid } from 'guid-typescript';

export class UserTask {
    id?: Guid;
    creationDate?: string;
    createdBy?: string;
    updateDate?: string;
    updatedBy?: string;
    estimateWorkLoad?: number;
    toFinalise?: number;
    description?: string;
    status?: string;
    closingDate?: string;
    requirementId?: Guid;
    userId?: Guid;
    isValidated?: string;
    //startDate?: string;
    
    type?: string;
    
    requirementNom?: string;

    userFullName?: string;

    isGuard?: string; // for add task
    billable? :string; // for add task
}

