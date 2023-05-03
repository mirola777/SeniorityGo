export class Seniority {
    private _id: number;
    private _name: string;
    private _level: number;

    constructor(id: number, name: string, level: number) {
        this._id = id;
        this._name = name;
        this._level = level;
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

    public getLevel(): number {
        return this._level;
    }

    public setLevel(level: number): void {
        this._level = level;
    }
}