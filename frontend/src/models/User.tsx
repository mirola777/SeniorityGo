export class User {
    private _id: number;
    private _username: string;
    private _email: string;

    constructor(id: number, username: string, email: string) {
        this._id = id;
        this._username = username;
        this._email = email;
    }

    public getUsername(): string {
        return this._username;
    }

    public setUsername(username: string): void {
        this._username = username;
    }

    public getId(): number {
        return this._id;
    }

    public setId(value: number): void {
        this._id = value;
    }

    public getEmail(): string {
        return this._email;
    }

    public setEmail(email: string): void {
        this._email = email;
    }
}
