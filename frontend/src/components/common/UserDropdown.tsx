import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Developer } from '../../models/Developer';
import { Admin } from '../../models/Admin';
import { logout } from '../../services/AuthService';


interface UserDropdownProps {
    user: Developer | Admin;
}


function UserDropdown({ user }: UserDropdownProps) {
    // Translation component
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown relative">
            <img
                alt="Avatar"
                src={user.getAvatar()}
                className="h-8 w-8 rounded-full object-cover cursor-pointer"
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className="dropdown-menu absolute right-0 mt-2 p-2 lg:p-4 rounded-lg shadow-2xl divide-y w-54 border border-blue-800  bg-dark-blue-800 divide-blue-800">
                    <div className="flex flex-col items-center px-4 py-3 text-white">
                        <img src={user.getAvatar()} alt="Avatar" className="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover"></img>
                        <div className='text-lg lg:text-xl my-1 lg:my-4'>{user.getUser().getUsername()}</div>
                        {user instanceof Developer && (<div className='text-sm lg:text-base text-gray-400'>{user.getFirstName() + " " + user.getLastName()}</div>)}
                        {user instanceof Developer && (<span className="text-xs mb-4 lg:text-sm whitespace-nowrap font-medium m-0.5 px-2.5 py-0.5 rounded-xl bg-cyan-900 text-cyan-400 ">
                            {t('developer')}
                        </span>)}
                        {user instanceof Admin && (<span className="text-xs mb-4 lg:text-sm whitespace-nowrap font-medium m-0.5 px-2.5 py-0.5 rounded-xl bg-cyan-900 text-cyan-400 ">
                            {t('administrator')}
                        </span>)}
                        <div className="text-sm lg:text-base text-gray-400 truncate">{user.getUser().getEmail()}</div>
                    </div>
                    <ul className="py-2 text-sm lg:text-base  text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                        {user && user instanceof Admin && (
                            <li className="w-full">
                                <Link to="/admin" onClick={toggleDropdown} className="block rounded-lg px-4 lg:py-2 hover:bg-gray-600 text-white">{t('admin_panel')}</Link>
                            </li>
                        )}
                        {user && user instanceof Developer && (
                            <li className="w-full">
                                <Link to="/developer" onClick={toggleDropdown} className="block rounded-lg px-4 lg:py-2 hover:bg-gray-600 text-white">{t('your_page')}</Link>
                            </li>
                        )}

                    </ul>
                    <div className="py-2">
                        <button onClick={logout} className="w-full text-start block rounded-lg px-4 lg:py-2 text-sm lg:text-base  hover:bg-gray-600 text-white">{t('logout')}</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserDropdown;