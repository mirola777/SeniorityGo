import { Seniority } from "./Seniority";
import { Pokemon } from './Pokemon';


export class ProfileSeniority {
    private _seniority: Seniority | null;
    private _pokemon: Pokemon | null;

    constructor(seniority: Seniority | null, pokemon: Pokemon | null) {
        this._seniority = seniority;
        this._pokemon = pokemon;
    }

    public getSeniority(): Seniority | null {
        return this._seniority;
    }

    public getPokemon(): Pokemon | null {
        return this._pokemon;
    }
}
