import { Admin } from './Admin';
import { Developer } from './Developer';
import { RequestBase } from './Request';
import { Requirement } from './Requirement';


export class RequestValidateRequirement extends RequestBase {
    private _requirement: Requirement | null;

    constructor(id: number, developer: Developer | Admin | null, organization: number, created_at: Date, requirement: Requirement | null) {
        super(id, developer, organization, created_at);
        this._requirement = requirement;
    }

    public getRequirement(): Requirement | null {
        return this._requirement;
    }
}