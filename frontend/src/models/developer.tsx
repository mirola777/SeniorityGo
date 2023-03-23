import { User } from './user';
import { Profile } from './profile';
import { Requirement } from './requirement';

export class Developer {
    private _birthday: Date;
    private _avatar: string;
    private _phone_number: string;
    private _is_activated: boolean;
    private _user: User;
    private _profiles: Profile[];
    private _requirements: Requirement[];

    constructor(user: User, birthday: Date, avatar: string, phone_number: string, is_activated: boolean, profiles: Profile[], requirements: Requirement[]) {
        this._user = user;
        this._birthday = birthday;
        this._avatar = avatar;
        this._phone_number = phone_number;
        this._is_activated = is_activated;
        this._profiles = profiles;
        this._requirements = requirements;
    }

    public getUser(): User {
        return this._user;
    }

    public setUser(user: User): void {
        this._user = user;
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

    public getProfiles(): Profile[] {
        return this._profiles;
    }

    public setProfiles(profiles: Profile[]): void {
        this._profiles = profiles;
    }

    public getRequirements(): Requirement[] {
        return this._requirements;
    }

    public setRequirements(requirements: Requirement[]): void {
        this._requirements = requirements;
    }
}
