import { User } from "./User";

export class Admin {
    private _user: User;
    private _avatar: string;

    public constructor(user: User, avatar: string) {
        this._user = user;
        this._avatar = avatar;
    }

    public getAvatar(): string {
        return this._avatar;
    }

    public getUser(): User {
        return this._user;
    }
}