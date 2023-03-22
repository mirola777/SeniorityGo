export class Requirement {
    private _id: number;
    private _name: string;
    private _description: string;
    private _image: string;
    private _points: number;

    constructor(id: number, name: string, description: string, image: string, points: number) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._image = image;
        this._points = points;
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

    public get image(): string {
        return this._image;
    }

    public set image(value: string) {
        this._image = value;
    }

    public get points(): number {
        return this._points;
    }

    public set points(value: number) {
        this._points = value;
    }
}
