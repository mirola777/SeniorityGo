import { Admin } from "../models/Admin";
import JsonToUser from "./UserParser";


function JsonToAdmin(json: any): Admin {
    const admin = new Admin(
        JsonToUser(json),
    );

    return admin;
}

export default JsonToAdmin;