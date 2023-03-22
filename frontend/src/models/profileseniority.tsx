export class ProfileSeniority {
    private _id: number;
    private _seniority_id: number;
    private _pokemon_id: number;
    private _profile_id: number;

    constructor(id: number, seniority_id: number, pokemon_id: number, profile_id: number) {
        this._id = id;
        this._seniority_id = seniority_id;
        this._pokemon_id = pokemon_id;
        this._profile_id = profile_id;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get seniority_id(): number {
        return this._seniority_id;
    }

    public set seniority_id(value: number) {
        this._seniority_id = value;
    }

    public get pokemon_id(): number {
        return this._pokemon_id;
    }

    public set pokemon_id(value: number) {
        this._pokemon_id = value;
    }

    public get profile_id(): number {
        return this._profile_id;
    }

    public set profile_id(value: number) {
        this._profile_id = value;
    }
}
