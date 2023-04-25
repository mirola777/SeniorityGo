import { Requirement } from "../../../models/Requirement";
import RequirementDeleteButton from "./RequirementDeleteButton";

interface RequirementListItemProps {
    requirement: Requirement;
    onDeleteRequirement: (requirement: Requirement) => void;
}

function RequirementListItem({requirement, onDeleteRequirement}: RequirementListItemProps) {
    return (
        <div className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
            <div className="transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                <div className="flex text-center items-center justify-between w-full">
                    <h3 className="text-sm font-bold text-gray-200">
                        {requirement.getName()}
                    </h3>
                    <RequirementDeleteButton onDeleteRequirement={onDeleteRequirement} requirement={requirement} />
                </div>
            </div>
        </div>
    );
}

export default RequirementListItem;