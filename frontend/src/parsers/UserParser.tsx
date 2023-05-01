import { User } from "../models/User";


function JsonToUser(json: any): User {
    const user = new User(
        json.user.id,
        json.user.username,
        json.user.email,
        json.organization
    );

    return user;
}

export default JsonToUser;