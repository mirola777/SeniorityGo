import { DeveloperProfile } from './developerprofile';
import { ProfileSeniority } from './profileseniority';
export class Profile {
    private _id: number;
    private _name: string;
    private _description: string;
    private _developer_profiles: DeveloperProfile[];
    private _profile_seniorities: ProfileSeniority[];

    constructor(id: number, name: string, description: string, developer_profiles: DeveloperProfile[], profile_seniorities: ProfileSeniority[]) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._developer_profiles = developer_profiles;
        this._profile_seniorities = profile_seniorities;
    }

    public getId(): number {
        return this._id;
    }

    public setId(id: number): void {
        this._id = id;
    }

    public getname(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public getDescription(): string {
        return this._description;
    }

    public setDescription(desription: string): void {
        this._description = desription;
    }

    public getDeveloperProfiles(): DeveloperProfile[] {
        return this._developer_profiles;
    }

    public setDeveloperProfiles(developer_profiles: DeveloperProfile[]): void {
        this._developer_profiles = developer_profiles;
    }

    public getProfilesSeniorities(): ProfileSeniority[] {
        return this._profile_seniorities;
    }

    public setProfilesSeniorities(profile_seniorities: ProfileSeniority[]): void {
        this._profile_seniorities = profile_seniorities;
    }
}
