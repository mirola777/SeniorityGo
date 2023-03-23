export class User {
    private _id: number;
    private _first_name: string;
    private _second_name: string;
    private _last_name: string;
    private _email: string;
    private _password: string;
    private _creation_date: Date;

    constructor(id: number, first_name: string, second_name: string, last_name: string, email: string, password: string, creation_date: Date) {
        this._id = id;
        this._first_name = first_name;
        this._second_name = second_name;
        this._last_name = last_name;
        this._email = email;
        this._password = password;
        this._creation_date = creation_date;
    }

    public getId(): number {
        return this._id;
    }

    public setId(value: number): void {
        this._id = value;
    }

    public getFirstName(): string {
        return this._first_name;
    }

    public setFirstName(first_name: string): void {
        this._first_name = first_name;
    }

    public getSecondName(): string {
        return this._second_name;
    }

    public setSecondName(second_name: string): void {
        this._second_name = second_name;
    }

    public getLastName(): string {
        return this._last_name;
    }

    public setLastName(last_name: string): void {
        this._last_name = last_name;
    }

    public getEmail(): string {
        return this._email;
    }

    public setEmail(email: string): void {
        this._email = email;
    }

    public getPassword(): string {
        return this._password;
    }

    public setPassword(password: string): void {
        this._password = password;
    }

    public getCreationDate(): Date {
        return this._creation_date;
    }

    public setCreationDate(creation_date: Date): void {
        this._creation_date = creation_date;
    }
}
