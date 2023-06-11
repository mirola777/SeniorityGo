import { Admin } from "./Admin";
import { Developer } from "./Developer";

export class RequestBase {
    private _id: number;
    private _developer: Developer | Admin | null;
    private _organization: number;
    private _created_at: Date;

    constructor(id: number, developer: Developer | Admin | null, organization: number, created_at: Date) {
        this._id = id;
        this._developer = developer;
        this._organization = organization;
        this._created_at = created_at;
    }

    public getId(): number {
        return this._id;
    }

    public getDeveloper(): Developer | Admin | null {
        return this._developer;
    }

    public getOrganization(): number {
        return this._organization;
    }

    public getCreatedAt(): Date {
        return this._created_at;
    }
}
