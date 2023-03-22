export class Seniority {
    private _id: number;
    private _name: string;
    private _level: number;

    constructor(id: number, name: string, level: number) {
        this._id = id;
        this._name = name;
        this._level = level;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get level(): number {
        return this._level;
    }

    set level(level: number) {
        this._level = level;
    }
}