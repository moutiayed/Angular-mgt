import { Guid } from 'guid-typescript';

export class UserPayload {
    fullName?: string;
    function?: string;
    id?: Guid;
    rol?: string;
}
