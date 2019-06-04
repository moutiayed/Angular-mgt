import { Guid } from 'guid-typescript';

export class TimesheetTaskWeek {
    id?: Guid;
    requirementName?: string;
    userTaskId?: Guid;
    taskDescription?:string;
    taskType?:string;
    weekStartDate?: string;
    isGuard?: boolean;
    billable?: boolean;
    day1?: string;
    day2?: string;
    day3?: string;
    day4?: string;
    day5?: string;
    day6?: string;
    day7?: string;

    userId?: Guid; // for add
}
