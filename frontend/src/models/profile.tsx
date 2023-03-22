export class Profile {
    private _id: number;
    private _name: string;
    private _description: string;

    constructor(id: number, name: string, description: string) {
        this._id = id;
        this._name = name;
        this._description = description;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }
}
