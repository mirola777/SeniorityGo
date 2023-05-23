import { NotificationBase } from './Notification';
import { Requirement } from './Requirement';


export class NotificationRequirementValidated extends NotificationBase {
    private _requirement: Requirement | null;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean, requirement: Requirement | null) {
        super(id, message, user, created_at, seen);
        this._requirement = requirement;
    }

    public getRequirement(): Requirement | null {
        return this._requirement;
    }
}