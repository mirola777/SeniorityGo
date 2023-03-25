import { Developer } from './Developer';
import { Requirement } from './Requirement';

export class DeveloperRequirement {
    private _id: number;
    private _developer: Developer;
    private _requirement: Requirement;
    private _is_completed: boolean;
    private _documents: File[];

    public constructor(id: number, developer: Developer, requirement: Requirement, is_completed: boolean, documents: File[]) {
        this._id = id;
        this._developer = developer;
        this._requirement = requirement;
        this._is_completed = is_completed;
        this._documents = documents;
    }

    public getId(): number {
        return this._id;
    }

    public setId(id: number): void {
        this._id = id;
    }

    public getDeveloper(): Developer {
        return this._developer;
    }

    public setDeveloper(developer: Developer): void {
        this._developer = developer;
    }

    public getRequirement(): Requirement {
        return this._requirement;
    }

    public setRequirement(requirement: Requirement): void {
        this._requirement = requirement;
    }

    public getIsCompleted(): boolean {
        return this._is_completed;
    }

    public setIsCompleted(is_completed: boolean): void {
        this._is_completed = is_completed;
    }

    public getDocuments(): File[] {
        return this._documents;
    }

    public setDocuments(documents: File[]): void {
        this._documents = documents;
    }
}
