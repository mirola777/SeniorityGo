import { Requirement } from './Requirement';

export class DeveloperRequirement {
    private _requirement: Requirement;
    private _is_completed: boolean;
    private _is_requested: boolean;
    private _documents: File[];

    public constructor(requirement: Requirement, is_completed: boolean, is_requested: boolean, documents: File[]) {
        this._requirement = requirement;
        this._is_completed = is_completed;
        this._documents = documents;
        this._is_requested = is_requested;
    }

    public getIsRequested(): boolean {
        return this._is_requested;
    }

    public getRequirement(): Requirement {
        return this._requirement;
    }

    public getIsCompleted(): boolean {
        return this._is_completed;
    }

    public getDocuments(): File[] {
        return this._documents;
    }
}
