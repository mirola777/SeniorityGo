import { RequestBase } from "../models/Request";
import { RequestJoinProfile } from "../models/RequestJoinProfile";
import JsonToProfile from "./ProfileParser";
import JsonToUser from "./UserParser";


function JsonToRequest(json: any): RequestBase | null {
    console.log(json);
    if (json.profile) {
        const request = new RequestJoinProfile(
            json.id,
            json.developer ? JsonToUser(json.developer) : null,
            json.organization,
            json.created_at,
            json.profile ? JsonToProfile(json.profile) : null
        );

        return request;
    }

    return null;
}

export default JsonToRequest;