import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from 'react-i18next';


interface DropzoneImageProps {
    previousImage?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


function DropzoneImage({ previousImage, onChange }: DropzoneImageProps) {
    // Translation component
    const { t } = useTranslation();

    const [paths, setPaths] = useState<string[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setPaths(acceptedFiles.map(file => URL.createObjectURL(file)));
        acceptedFiles.forEach(file => {
            const event = {
                target: {
                    name: 'image',
                    value: file,
                    type: 'file',
                },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
        });

    }, [setPaths, onChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxSize: 1500000, // 1.5MB
        maxFiles: 1,
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        }
    });

    return (
        <div>
            <div {...getRootProps()}>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-78 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {paths.length === 0 ?
                                (
                                    previousImage !== null ? 
                                        <img className="h-48 m-3 object-cover" src={previousImage} alt="Uploaded file" /> : 
                                        <svg aria-hidden="true" className="w-20 h-48 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                ) :

                                paths.map(path =>
                                    <img className="h-20 mb-3 object-cover" key={path} src={path} alt="Uploaded file" />
                                )
                            }
                            <p className="mb-2 text-sm text-gray-400">{t('click_or_drop_image')}</p>
                            <p className="text-xs text-gray-400">{t('click_or_drop_image_types')}</p>
                        </div>
                        <input id="image" name="image" {...getInputProps()} className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DropzoneImage;