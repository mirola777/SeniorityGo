import { User } from "./User";

export class Admin {
    private _user: User;

    public constructor(user: User) {
        this._user = user;
    }

    public getUser(): User {
        return this._user;
    }
    public setUser(user: User): void {
        this._user = user;
    }
}