import { NotificationBase } from './Notification';
import { Profile } from './Profile';


export class NotificationJoinProfile extends NotificationBase {
    private _profile: Profile | null;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean, profile: Profile | null) {
        super(id, message, user, created_at, seen);
        this._profile = profile;
    }

    public getProfile(): Profile | null {
        return this._profile;
    }
}