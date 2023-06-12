import { Admin } from './Admin';
import { Developer } from './Developer';
import { RequestBase } from './Request';
import { Requirement } from './Requirement';
import { ValidateFile } from './ValidateFile';


export class RequestValidateRequirement extends RequestBase {
    private _requirement: Requirement | null;
    private _files: ValidateFile[];

    constructor(id: number, developer: Developer | Admin | null, organization: number, created_at: Date, requirement: Requirement | null, files: ValidateFile[]) {
        super(id, developer, organization, created_at);
        this._requirement = requirement;
        this._files = files;
    }

    public getRequirement(): Requirement | null {
        return this._requirement;
    }

    public getFiles(): ValidateFile[] {
        return this._files;
    }
}