import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from 'react-i18next';
import { ReactComponent as DocumentIcon } from '../../assests/icons/Document.svg';


interface DropzoneFilesProps {
    id?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


function DropzoneFiles({ id, onChange }: DropzoneFilesProps) {
    // Translation component
    const { t } = useTranslation();

    const [paths, setPaths] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
        setPaths(acceptedFiles.map(file => URL.createObjectURL(file)));
        const event = {
            target: {
                name: id ? id : 'files',
                value: acceptedFiles,
                type: 'file',
            },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(event);

    }, [setPaths, onChange]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxSize: 50000000, // 50MB
    });

    return (
        <div className="space-y-2 w-full">
            <div {...getRootProps()} onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor={id ? id : "files"} className="flex flex-col items-center justify-center w-full h-78 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                        <div className="flex w-full flex-col items-center justify-center px-4 pt-5 pb-6">
                            <svg aria-hidden="true" className="w-32 h-32 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-400">{t('click_or_drop_files')}</p>
                            <p className="text-xs text-gray-400">{t('click_or_drop_files_types')}</p>
                        </div>
                        <input id={id ? id : "files"} name={id ? id : "files"} {...getInputProps()} className="hidden" />
                    </label>

                </div>
            </div>
            <div className="flex flex-wrap w-full max-h-72 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-thumb-full scrollbar-track-gray-600  scrollbar-track-rounded-full">
                {files.map(file =>
                    <div className="flex w-1/2 h-10 p-0.5">
                        <div className="flex px-2 py-1 w-full space-x-2 border-2 border-gray-500 rounded-lg">
                            <DocumentIcon className="w-6 h-6 text-gray-400" />
                            <h1 className="text-base text-start  truncate  w-full text-gray-400">{file.name}</h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropzoneFiles;