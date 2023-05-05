import { Profile } from './Profile';
import { Requirement } from './Requirement';
import { Seniority } from './Seniority';

export class Organization {
    private _id: number;
    private _name: string;
    private _image: string;
    private _profiles: Profile[];
    private _seniorities: Seniority[];
    private _requirements: Requirement[];

    constructor(id: number, name: string, image: string, profiles: Profile[], seniorities: Seniority[], requirements: Requirement[]) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._profiles = profiles;
        this._seniorities = seniorities;
        this._requirements = requirements;
    }

    public getRequirements(): Requirement[] {
        return this._requirements;
    }

    public getSeniorities(): Seniority[] {
        return this._seniorities;
    }

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public getImage(): string {
        return this._image;
    }

    public getProfiles(): Profile[] {
        return this._profiles;
    }
}