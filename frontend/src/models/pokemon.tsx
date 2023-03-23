export class Pokemon {
    private _id: number;
    private _name: string;
    private _image: string;
    private _small_image: string;

    constructor(id: number, name: string, image: string, small_image: string) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._small_image = small_image;
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

    public getImage(): string {
        return this._image;
    }

    public setImage(image: string): void {
        this._image = image;
    }

    public getSmallImage(): string {
        return this._small_image;
    }

    public setSmallImage(small_image: string): void {
        this._small_image = small_image;
    }
}