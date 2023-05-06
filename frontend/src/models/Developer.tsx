import { User } from './User';
import { Requirement } from './Requirement';
import { DeveloperProfile } from './DeveloperProfile';

export class Developer {
    private _birthday: Date;
    private _first_name: string;
    private _second_name: string;
    private _last_name: string;
    private _avatar: string;
    private _phone_number: string;
    private _is_activated: boolean;
    private _user: User;
    private _profiles: DeveloperProfile[];
    private _requirements: Requirement[];

    constructor(user: User, first_name: string, second_name: string, last_name: string, birthday: Date, avatar: string, phone_number: string, is_activated: boolean, profiles: DeveloperProfile[], requirements: Requirement[]) {
        this._user = user;
        this._birthday = birthday;
        this._avatar = avatar;
        this._phone_number = phone_number;
        this._is_activated = is_activated;
        this._profiles = profiles;
        this._requirements = requirements;
        this._first_name = first_name;
        this._second_name = second_name;
        this._last_name = last_name;
    }

    public getUser(): User {
        return this._user;
    }

    public setUser(user: User): void {
        this._user = user;
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

    public getBirthday(): Date {
        return this._birthday;
    }

    public setBirthday(birthday: Date) {
        this._birthday = birthday;
    }

    public getAvatar(): string {
        return this._avatar;
    }

    public setAvatar(avatar: string): void {
        this._avatar = avatar;
    }

    public getPhoneNumber(): string {
        return this._phone_number;
    }

    public setPhoneNumber(phone_number: string): void {
        this._phone_number = phone_number;
    }

    public getIsActivated(): boolean {
        return this._is_activated;
    }

    public setIsActivated(_is_activated: boolean): void {
        this._is_activated = _is_activated;
    }

    public getDeveloperProfiles(): DeveloperProfile[] {
        return this._profiles;
    }

    public getRequirements(): Requirement[] {
        return this._requirements;
    }

    public setRequirements(requirements: Requirement[]): void {
        this._requirements = requirements;
    }
}
