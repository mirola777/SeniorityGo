import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RequirementCard from "../../../components/admin/requirement/RequirementCard";
import { Requirement } from "../../../models/Requirement";
import { getAllRequirements } from "../../../services/RequirementService";
import { Link } from "react-router-dom";


function Requirements() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [requirements, setRequirements] = useState<Requirement[]>([]);

    useEffect(() => {
        getAllRequirements().then((requirementsResponse) => {
            setRequirements(requirementsResponse);
        });
    }, []);

    return (
        <div className="py-8 pr-8 mx-auto w-full ">
            <div className="rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-5xl font-extrabold dark:text-white">
                        {t("requirements")}
                    </h2>
                    <Link
                        to="create"
                        className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75"
                    >
                        <span className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                            {t("create_requirement")}
                        </span>
                    </Link>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {requirements.map((requirement) => (
                        <li>
                            <RequirementCard requirement={requirement}></RequirementCard>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Requirements;