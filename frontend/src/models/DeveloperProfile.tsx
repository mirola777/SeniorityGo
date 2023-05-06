import { Profile } from './Profile';
import { Seniority } from './Seniority';

export class DeveloperProfile {
    private _profile: Profile;
    private _seniority: Seniority;
    private _is_accepted: boolean;
    private _entrance_date: Date;

    constructor(profile: Profile, seniority: Seniority, is_accepted: boolean, entrance_date: Date) {
        this._profile = profile;
        this._seniority = seniority;
        this._is_accepted = is_accepted;
        this._entrance_date = entrance_date;
    }

    public getProfile(): Profile {
        return this._profile;
    }

    public setProfile(profile: Profile): void {
        this._profile = profile;
    }

    public getSeniority(): Seniority {
        return this._seniority;
    }

    public setSeniority(seniority: Seniority): void {
        this._seniority = seniority;
    }

    public getIsAccepted(): boolean {
        return this._is_accepted;
    }

    public setIsAccepted(is_accepted: boolean): void {
        this._is_accepted = is_accepted;
    }

    public getEntranceDate(): Date {
        return this._entrance_date;
    }

    public setEntranceDate(entrance_date: Date): void {
        this._entrance_date = entrance_date;
    }
}
