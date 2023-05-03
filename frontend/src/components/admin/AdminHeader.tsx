import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { useTranslation } from 'react-i18next';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"

function AdminHeader() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className="w-full flex bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
            <div className="flex mx-auto max-w-screen-2xl justify-between w-full px-8">
                <div className="flex items-center mx-auto w-full justify-start gap-2">
                    <AppLogo className="h-16 w-16"></AppLogo>
                    <span className="ml-2 whitespace-nowrap rounded-full bg-dark-blue-300 px-2.5 py-0.5 text-xs text-gray-400">
                        {t('admin_panel')}
                    </span>
                </div>

                <div className="flex items-center w-full mx-auto justify-end gap-2">
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

        </div>

    );
}

export default AdminHeader;