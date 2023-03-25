import { Profile } from './Profile';

export class Organization {
    private _id: number;
    private _name: string;
    private _image: string;
    private _profiles: Profile[];

    constructor(id: number, name: string, image: string, profiles: Profile[]) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._profiles = profiles;
    }

    public getId(): number {
        return this._id;
    }

    public setId(id: number): void {
        this._id = id;
    }

    public getName(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public getImage(): string {
        return this._image;
    }

    public setImage(image: string): void {
        this._image = image;
    }

    public getProfiles(): Profile[] {
        return this._profiles;
    }

    public setProfiles(profiles: Profile[]): void {
        this._profiles = profiles;
    }
}