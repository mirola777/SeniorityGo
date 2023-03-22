export class User {
    private _id: number;
    private _firstName: string;
    private _secondName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _creationDate: Date;

    constructor(id: number, firstName: string, secondName: string, lastName: string, email: string, password: string, creationDate: Date) {
        this._id = id;
        this._firstName = firstName;
        this._secondName = secondName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._creationDate = creationDate;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get secondName(): string {
        return this._secondName;
    }

    public set secondName(value: string) {
        this._secondName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }

    public set creationDate(value: Date) {
        this._creationDate = value;
    }
}
