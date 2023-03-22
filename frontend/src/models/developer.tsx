export class Developer {
    private _birthday: Date;
    private _avatar: string;
    private _phone_number: string;
    private _is_activated: boolean;

    constructor(birthday: Date, avatar: string, phone_number: string, is_activated: boolean) {
        this._birthday = birthday;
        this._avatar = avatar;
        this._phone_number = phone_number;
        this._is_activated = is_activated;
    }

    public getBirthday(): Date {
        return this._birthday;
    }

    public setBirthday(value: Date) {
        this._birthday = value;
    }

    public getAvatar(): string {
        return this._avatar;
    }

    public setAvatar(value: string) {
        this._avatar = value;
    }

    public getPhoneNumber(): string {
        return this._phone_number;
    }

    public setPhoneNumber(value: string) {
        this._phone_number = value;
    }

    public getIsActivated(): boolean {
        return this._is_activated;
    }

    public setIsActivated(value: boolean) {
        this._is_activated = value;
    }
}
