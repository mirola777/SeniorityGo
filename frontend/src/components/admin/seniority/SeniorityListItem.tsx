import { Seniority } from '../../../models/Seniority';
import SeniorityDeleteButton from './SeniorityDeleteButton';

interface SeniorityListItemProps {
    seniority: Seniority;
    onDeleteSeniority: (seniority: Seniority) => void;
}

function SeniorityListItem({ seniority, onDeleteSeniority }: SeniorityListItemProps) {
    return (
        <div className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
            <div className="transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                <div className="flex text-center items-center justify-between w-full">
                    <h3 className="text-sm font-bold text-gray-200">
                        {seniority.getName() + " (" + seniority.getLevel() + ")"}
                    </h3>
                    <SeniorityDeleteButton onDeleteSeniority={onDeleteSeniority} seniority={seniority} />
                </div>
            </div>
        </div>
    );
}

export default SeniorityListItem;