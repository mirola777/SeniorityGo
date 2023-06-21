import { Admin } from './Admin';
import { Developer } from './Developer';
import { NotificationBase } from './Notification';


export class NotificationNewUser extends NotificationBase {
    private _new_user: Developer | Admin | null;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean, new_user: Developer | Admin | null) {
        super(id, message, user, created_at, seen);
        this._new_user = new_user;
    }

    getNewUser(): Developer | Admin | null {
        return this._new_user;
    }
}