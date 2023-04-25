import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function DropzoneImage() {
    const [paths, setPaths] = useState<string[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setPaths(acceptedFiles.map(file => URL.createObjectURL(file)));
    }, [setPaths]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drop the files here ...</p>
            </div>
            {paths.map(path =>
                <img key={path} src={path} alt="Uploaded file" />
            )}
        </div>
    );
}

export default DropzoneImage;