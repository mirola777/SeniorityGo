export class ProfileSeniorityRequirement {
    private _profileseniority_id: number;
    private _requirement_id: number;

    constructor(profileseniority_id: number, requirement_id: number) {
        this._profileseniority_id = profileseniority_id;
        this._requirement_id = requirement_id;
    }

    public get profileseniority_id(): number {
        return this._profileseniority_id;
    }

    public set profileseniority_id(value: number) {
        this._profileseniority_id = value;
    }

    public get requirement_id(): number {
        return this._requirement_id;
    }

    public set requirement_id(value: number) {
        this._requirement_id = value;
    }
}
