import { Admin } from './Admin';
import { Developer } from './Developer';
import { NotificationBase } from './Notification';
import { Profile } from './Profile';
import { Seniority } from './Seniority';


export class NotificationAdminAdvanceProfile extends NotificationBase {
    private _profile: Profile | null;
    private _seniority: Seniority | null;
    private _developer: Developer | Admin | null;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean, profile: Profile | null, seniority: Seniority | null, developer: Developer | Admin | null) {
        super(id, message, user, created_at, seen);
        this._profile = profile;
        this._seniority = seniority;
        this._developer = developer;
    }

    public getSeniority(): Seniority | null {
        return this._seniority;
    }

    public getProfile(): Profile | null {
        return this._profile;
    }

    public getDeveloper(): Developer | Admin | null {
        return this._developer;
    }
}