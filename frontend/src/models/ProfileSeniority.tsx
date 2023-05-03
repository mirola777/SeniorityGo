import { Seniority } from "./Seniority";
import { Pokemon } from './Pokemon';
import { Profile } from './Profile';

export class ProfileSeniority {
    private _id: number;
    private _seniority: Seniority;
    private _pokemon: Pokemon;
    private _profile: Profile;

    constructor(id: number, seniority: Seniority, pokemon: Pokemon, profile: Profile) {
        this._id = id;
        this._seniority = seniority;
        this._pokemon = pokemon;
        this._profile = profile;
    }

    public getId(): number {
        return this._id;
    }

    public setId(id: number): void {
        this._id = id;
    }

    public getSeniority(): Seniority {
        return this._seniority;
    }

    public setSeniority(seniority: Seniority): void {
        this._seniority = seniority;
    }

    public getPokemon(): Pokemon {
        return this._pokemon;
    }

    public setPokemon(pokemon: Pokemon): void {
        this._pokemon = pokemon;
    }

    public getProfile(): Profile {
        return this._profile;
    }

    public setProfile(profile: Profile): void {
        this._profile = profile;
    }
}
