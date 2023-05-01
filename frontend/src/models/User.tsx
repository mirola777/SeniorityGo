export class User {
    private _id: number;
    private _username: string;
    private _email: string;
    private _organization: number;

    constructor(id: number, username: string, email: string, organization: number) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._organization = organization;
    }

    public getOrganization(): number {
        return this._organization;
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
