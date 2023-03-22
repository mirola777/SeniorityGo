export class DeveloperProfile {
    private _id: number;
    private _developer_id: number;
    private _profile_id: number;
    private _seniority_id: number;
    private _is_accepted: boolean;
    private _entrance_date: Date;

    constructor(id: number, developer_id: number, profile_id: number, seniority_id: number, is_accepted: boolean, entrance_date: Date) {
        this._id = id;
        this._developer_id = developer_id;
        this._profile_id = profile_id;
        this._seniority_id = seniority_id;
        this._is_accepted = is_accepted;
        this._entrance_date = entrance_date;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get developer_id(): number {
        return this._developer_id;
    }

    public set developer_id(value: number) {
        this._developer_id = value;
    }

    public get profile_id(): number {
        return this._profile_id;
    }

    public set profile_id(value: number) {
        this._profile_id = value;
    }

    public get seniority_id(): number {
        return this._seniority_id;
    }

    public set seniority_id(value: number) {
        this._seniority_id = value;
    }

    public get is_accepted(): boolean {
        return this._is_accepted;
    }

    public set is_accepted(value: boolean) {
        this._is_accepted = value;
    }

    public get entrance_date(): Date {
        return this._entrance_date;
    }

    public set entrance_date(value: Date) {
        this._entrance_date = value;
    }
}
