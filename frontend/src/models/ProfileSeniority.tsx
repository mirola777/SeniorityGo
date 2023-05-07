import { Seniority } from "./Seniority";
import { Pokemon } from './Pokemon';
import { Requirement } from "./Requirement";


export class ProfileSeniority {
    private _seniority: Seniority | null;
    private _pokemon: Pokemon | null;
    private _requirements: Requirement[];

    constructor(seniority: Seniority | null, pokemon: Pokemon | null, requirements: Requirement[]) {
        this._seniority = seniority;
        this._pokemon = pokemon;
        this._requirements = requirements;
    }

    public getSeniority(): Seniority | null {
        return this._seniority;
    }

    public getPokemon(): Pokemon | null {
        return this._pokemon;
    }

    public getRequirements(): Requirement[] {  
        return this._requirements;
    }
}
