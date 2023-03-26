import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { useTranslation } from 'react-i18next';

function AdminHeader() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className="mx-auto w-full pr-8 pt-8 ">
            <div className="flex items-center justify-end gap-2 p-4 rounded-lg bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl">
                <div className="flex items-center gap-4">
                    <button className="block shrink-0 rounded-full bg-dark-blue-900 p-2.5 text-gray-400 shadow-sm hover:bg-dark-blue-300 hover:text-gray-100">
                        <span className="sr-only">{t('notifications')}</span>
                        <NotificationIcon className="h-5 w-5"></NotificationIcon>
                    </button>
                </div>

                <span aria-hidden="true" className="block h-6 w-px rounded-full bg-dark-blue-800"></span>

                <button className="block">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </button>
            </div>
        </div>

    );
}

export default AdminHeader;