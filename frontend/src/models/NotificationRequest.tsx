import { Admin } from './Admin';
import { Developer } from './Developer';
import { NotificationBase } from './Notification';


export class NotificationRequest extends NotificationBase {
    private _developer: Developer | Admin | null;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean, developer: Developer | Admin | null) {
        super(id, message, user, created_at, seen);
        this._developer = developer;
    }

    getDeveloper(): Developer | Admin | null {
        return this._developer;
    }
}