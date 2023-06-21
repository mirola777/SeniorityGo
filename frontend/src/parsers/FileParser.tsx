import { ValidateFile } from "../models/ValidateFile";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function JsonToFile(json: any): ValidateFile {
    const file = new ValidateFile(
        json.file.replace(/^.*[\\\/]/, ''),
        BACKEND_URL + json.file
    );
    
    return file;
}

export default JsonToFile;