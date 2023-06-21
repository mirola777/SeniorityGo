import { ReactComponent as DownloadIcon } from "../../assests/icons/DocumentArrowDown.svg";

interface FileDownloadCardProps {
    filename: string;
    url: string;
}

function FileDownloadCard({ filename, url }: FileDownloadCardProps) {
    return (
        <div className="w-full">
            <div className={" w-full h-full transition ease-in-out hover:bg-indigo-500 duration-150 rounded-lg bg-gradient-to-r p-0.5 shadow-2xl from-fuchsia-700 to-blue-600"}>
                <div className="h-full flex transition justify-between items-center rounded-lg hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-2">
                    <div>
                        <h3 className="text-sm font-bold text-gray-200">
                            {filename}
                        </h3>
                    </div>
                    <a href={url} download={filename} target='_blank' className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-lg bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
                        <DownloadIcon className="w-6 h-6 text-gray-200" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FileDownloadCard;