export class DeveloperRequirement {
    private _id: number;
    private _developer_id: number;
    private _requirement_id: number;
    private _is_completed: boolean;
    private _documents: File[];

    public constructor(id: number, developer_id: number, requirement_id: number, is_completed: boolean, documents: File[]) {
        this._id = id;
        this._developer_id = developer_id;
        this._requirement_id = requirement_id;
        this._is_completed = is_completed;
        this._documents = documents;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get developer_id(): number {
        return this._developer_id;
    }

    public set developer_id(value: number) {
        this._developer_id = value;
    }

    public get requirement_id(): number {
        return this._requirement_id;
    }

    public set requirement_id(value: number) {
        this._requirement_id = value;
    }

    public get is_completed(): boolean {
        return this._is_completed;
    }

    public set is_completed(value: boolean) {
        this._is_completed = value;
    }

    public get documents(): File[] {
        return this._documents;
    }

    public set documents(value: File[]) {
        this._documents = value;
    }
}
