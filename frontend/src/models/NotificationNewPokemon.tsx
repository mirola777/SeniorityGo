import { NotificationBase } from './Notification';
import { Pokemon } from './Pokemon';


export class NotificationNewPokemon extends NotificationBase {
    private _pokemon: Pokemon | null;

    constructor(id: number, message: string, user: number, created_at: Date, seen: boolean, pokemon: Pokemon | null) {
        super(id, message, user, created_at, seen);
        this._pokemon = pokemon;
    }

    getPokemon(): Pokemon | null {
        return this._pokemon;
    }
}