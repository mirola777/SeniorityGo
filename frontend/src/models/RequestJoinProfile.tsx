import { Admin } from './Admin';
import { Developer } from './Developer';
import { Profile } from './Profile';
import { RequestBase } from './Request';


export class RequestJoinProfile extends RequestBase {
    private _profile: Profile | null;

    constructor(id: number, developer: Developer | Admin | null, organization: number, created_at: Date, profile: Profile | null) {
        super(id, developer, organization, created_at);
        this._profile = profile;
    }

    public getProfile(): Profile | null {
        return this._profile;
    }
}