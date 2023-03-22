import { User } from "./user";

export class Admin {
    private _user: User;

    public constructor(id: number, firstName: string, secondName: string, lastName: string, email: string, password: string, creationDate: Date){
        this._user = new User(id, firstName, secondName, lastName, email, password, creationDate);
    }

    public getUser(): User {
        return this._user;
    }
    public setUser(user: User): void{
        this._user = user;
    }
}