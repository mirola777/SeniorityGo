import { RequestBase } from "../models/Request";
import { RequestJoinProfile } from "../models/RequestJoinProfile";
import { RequestValidateRequirement } from "../models/RequestValidateRequirement";
import JsonToFile from "./FileParser";
import JsonToProfile from "./ProfileParser";
import JsonToRequirement from "./RequirementParser";
import JsonToUser from "./UserParser";


function JsonToRequest(json: any): RequestBase | null {
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

    if (json.requirement) {
        const request = new RequestValidateRequirement(
            json.id,
            json.developer ? JsonToUser(json.developer) : null,
            json.organization,
            json.created_at,
            json.requirement ? JsonToRequirement(json.requirement) : null,
            json.files ? json.files.map((file: any) => { return JsonToFile(file) }) : [],
        );

        return request;
    }

    return null;
}

export default JsonToRequest;