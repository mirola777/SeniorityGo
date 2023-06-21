export class ValidateFile {
    private _name: string;
    private _url: string;

    constructor(name: string, url: string) {
        this._name = name;
        this._url = url;
    }

    public getName(): string {
        return this._name;
    }

    public getUrl(): string {
        return this._url;
    }
}