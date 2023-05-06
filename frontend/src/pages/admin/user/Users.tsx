import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UserCard from "../../../components/admin/user/UserCard";
import { Developer } from "../../../models/Developer";
import { getOrganizationUsers } from "../../../services/DeveloperService";

function Users() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [users, setUsers] = useState<Developer[]>([]);

    useEffect(() => {
        getOrganizationUsers().then((developersResponse) => {
            setUsers(developersResponse);
        });
    }, []);

    return (
        <div className="py-8 pr-8 mx-auto w-full ">
            <div className="rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-5xl font-extrabold dark:text-white">
                        {t("users")}
                    </h2>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <li>
                            <UserCard user={user}></UserCard>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Users;
