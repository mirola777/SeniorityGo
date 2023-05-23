import { NotificationBase } from './Notification';
import { Profile } from './Profile';
import { Seniority } from './Seniority';


export class NotificationAdvanceProfile extends NotificationBase {
    private _profile: Profile | null;
    private _seniority: Seniority | null;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean, profile: Profile | null, seniority: Seniority | null) {
        super(id, message, user, created_at, seen);
        this._profile = profile;
        this._seniority = seniority;
    }

    public getSeniority(): Seniority | null {
        return this._seniority;
    }

    public getProfile(): Profile | null {
        return this._profile;
    }
}