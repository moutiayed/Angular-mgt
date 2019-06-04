import { Guid } from 'guid-typescript';

export class Requirement {
    id?: Guid;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updateBy?: string;
    description?: string;
    type?: string;
    status?: number;
    nom?: string;

    parentRequirementId?: Guid;
    parentRequirementName?: Guid;

    contractId?: Guid;
    contractName?: string;
    
    releaseId?: Guid;
    releaseDescription?: string;

    startDate?: string;
    closingDate?: string;

}
