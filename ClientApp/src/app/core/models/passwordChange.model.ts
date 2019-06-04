import { Guid } from "guid-typescript";

export class PasswordChange {
    userId?:Guid;
    oldPassword?:string;
    newPassword?:string;

}