import { NotificationBase } from "../models/Notification";
import { NotificationAdminAdvanceProfile } from "../models/NotificationAdminAdvanceProfile";
import { NotificationAdvanceProfile } from "../models/NotificationAdvanceProfile";
import { NotificationJoinProfile } from '../models/NotificationJoinProfile';
import { NotificationNewPokemon } from "../models/NotificationNewPokemon";
import { NotificationNewUser } from "../models/NotificationNewUser";
import { NotificationRequest } from "../models/NotificationRequest";
import { NotificationRequirementValidated } from "../models/NotificationRequirementValidated";
import JsonToPokemon from "./PokemonParser";
import JsonToProfile from "./ProfileParser";
import JsonToRequirement from "./RequirementParser";
import JsonToSeniority from "./SeniorityParser";
import JsonToUser from "./UserParser";


function JsonToNotification(json: any): NotificationBase | null {
    if (json.message === 'join_profile' || json.message === 'join_profile_accepted' || json.message === 'join_profile_rejected') {
        const notification = new NotificationJoinProfile(
            json.id,
            json.message,
            json.user,
            json.created_at,
            json.seen,
            json.profile ? JsonToProfile(json.profile) : null,
        );
    
        return notification;

    } else if (json.message === 'requirement_validate_requested' || json.message === 'requirement_validate_accepted' || json.message === 'requirement_validate_rejected') {
        const notification = new NotificationRequirementValidated(
            json.id,
            json.message,
            json.user,
            json.created_at,
            json.seen,
            json.requirement ? JsonToRequirement(json.requirement) : null,
        );

        return notification;
    } else if (json.message === 'advance_profile') {
        const notification = new NotificationAdvanceProfile(
            json.id,
            json.message,
            json.user,
            json.created_at,
            json.seen,
            json.profile ? JsonToProfile(json.profile) : null,
            json.seniority ? JsonToSeniority(json.seniority) : null,
        );

        return notification;
    } else if (json.message === 'admin_advance_profile') {
        const notification = new NotificationAdminAdvanceProfile(
            json.id,
            json.message,
            json.user,
            json.created_at,
            json.seen,
            json.profile ? JsonToProfile(json.profile) : null,
            json.seniority ? JsonToSeniority(json.seniority) : null,
            json.developer ? JsonToUser(json.developer) : null,
        );

        return notification;
    } else if (json.message === 'new_pokemon') {
        const notification = new NotificationNewPokemon(
            json.id,
            json.message,
            json.user,
            json.created_at,
            json.seen,
            json.pokemon ? JsonToPokemon(json.pokemon) : null,
        );

        return notification;
    } else if (json.message === 'new_user') {
        const notification = new NotificationNewUser(
            json.id,
            json.message,
            json.user,
            json.created_at,
            json.seen,
            json.developer ? JsonToUser(json.developer) : null,
        );

        return notification;
    } else if (json.message === 'admin_validate_requirement_request' || json.message === 'admin_join_profile_request') {
        const notification = new NotificationRequest(
            json.id,
            json.message,
            json.user,
            json.created_at,
            json.seen,
            json.developer ? JsonToUser(json.developer) : null,
        );

        return notification;
    }

    return null;
}

export default JsonToNotification;