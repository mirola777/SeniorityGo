import { DeveloperRequirement } from "../models/DeveloperRequirements";
import JsonToRequirement from "./RequirementParser";


function JsonToDeveloperRequirement(json: any): DeveloperRequirement {
    const developerrequirement = new DeveloperRequirement(
        JsonToRequirement(json.requirement),
        json.is_completed,
        []
    );

    return developerrequirement;
}

export default JsonToDeveloperRequirement;