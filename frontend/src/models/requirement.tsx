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

    public getId(): number {
        return this._id;
    }

    public setId(value: number): void {
        this._id = value;
    }

    public getName(): string {
        return this._name;
    }

    public setName(value: string): void {
        this._name = value;
    }

    public getDescription(): string {
        return this._description;
    }

    public setDescription(value: string): void {
        this._description = value;
    }

    public getImage(): string {
        return this._image;
    }

    public setImage(value: string): void {
        this._image = value;
    }

    public getPoints(): number {
        return this._points;
    }

    public setPoints(value: number): void {
        this._points = value;
    }
}
