export class NotificationBase {
    private _id: number;
    private _message: string;
    private _user: number;
    private _created_at: Date;
    private _seen: boolean;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean) {
        this._id = id;
        this._message = message;
        this._user = user;
        this._created_at = created_at;
        this._seen = seen;
    }

    public setSeen(seen: boolean): void {
        this._seen = seen;
    }

    public getSeen(): boolean {
        return this._seen;
    }

    public getId(): number {
        return this._id;
    }   

    public getMessage(): string {
        return this._message;
    }

    public getUser(): number {
        return this._user;
    }

    public getCreatedAt(): Date {
        return this._created_at;
    }
}
