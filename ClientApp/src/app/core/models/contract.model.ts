import { Guid } from 'guid-typescript';

export class Contract {
    id?: Guid;
    creationDate?: string;
    createdBy?: string;
    updateDate?: string;
    updatedBy?: string;
    name?: string;
    customerId?: Guid;
    startDate?: string;
    endDate?: string;
    coeffSunday?: number;
    status?: string;
    coeffBase?: number;
    coeffOutOfBusinessWeek?: number;
    coeffSaturday?: number;
    description?: string;

    customerName?: string;
}

