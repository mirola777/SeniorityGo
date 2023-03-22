export class Organization {
    private _id: number;
    private _name: string;
    private _image: string;

    constructor(id: number, name: string, image: string) {
        this._id = id;
        this._name = name;
        this._image = image;
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

    public get image(): string {
        return this._image;
    }

    public set image(value: string) {
        this._image = value;
    }
}