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

    get image(): string {
        return this._image;
    }

    set image(image: string) {
        this._image = image;
    }

    get small_image(): string {
        return this._small_image;
    }

    set small_image(small_image: string) {
        this._small_image = small_image;
    }
}