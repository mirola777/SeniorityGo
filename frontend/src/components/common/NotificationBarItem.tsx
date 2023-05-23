import { useTranslation } from 'react-i18next';
import { NotificationBase } from '../../models/Notification';
import { NotificationRequirementValidated } from '../../models/NotificationRequirementValidated';
import { NotificationJoinProfile } from '../../models/NotificationJoinProfile';
import { NotificationAdvanceProfile } from '../../models/NotificationAdvanceProfile';
import { NotificationAdminAdvanceProfile } from '../../models/NotificationAdminAdvanceProfile';
import { NotificationNewPokemon } from '../../models/NotificationNewPokemon';


interface NotificationBarItemProps {
    notification: NotificationBase;
    closeNotification: (notification: NotificationBase) => void;
}


function NotificationBarItem({ notification, closeNotification }: NotificationBarItemProps) {
    const { t } = useTranslation();

    return (
        <div>
            {!notification.getSeen() &&
                (<div key={notification.getId() + notification.getMessage()} className="w-full p-4 t rounded-lg bg-gray-800 text-gray-300 shadow-2xl">
                    <div className="flex w-full items-center mb-3">
                        <span className="mb-1 text-sm font-semibold text-white">{t('new_notification')}</span>
                        <button type="button" onClick={() => closeNotification(notification)} className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="flex w-full items-center">
                        <div className="relative inline-block shrink-0">
                            {notification instanceof NotificationRequirementValidated && (<img className="w-12 h-12 mr-3" src={notification.getRequirement()?.getImage()} alt="Requirement" />)}
                            {notification instanceof NotificationAdminAdvanceProfile && (<img className="w-12 h-12 mr-3 rounded-full" src={notification.getDeveloper()?.getAvatar()} alt="Avatar" />)}
                            {notification instanceof NotificationNewPokemon && (<img className="w-12 h-12 mr-3" src={notification.getPokemon()?.getSmallImage()} alt="Pokemon" />)}
                        </div>
                        <div className="text-sm font-normal">
                            <div className="text-sm font-semibold text-white">{t(notification.getMessage())}</div>
                            {notification instanceof NotificationRequirementValidated && (<span className="text-lg font-medium text-blue-500">{notification.getRequirement()?.getName()}</span>)}
                            {notification instanceof NotificationJoinProfile && (<span className="text-lg font-medium text-blue-500">{notification.getProfile()?.getName()}</span>)}
                            {notification instanceof NotificationAdvanceProfile && (<span className="text-lg font-medium text-blue-500">{notification.getProfile()?.getName() + ' (' + notification.getSeniority()?.getName() + ')'}</span>)}
                            {notification instanceof NotificationAdminAdvanceProfile && (<span className="text-lg font-medium text-blue-500">{notification.getDeveloper()?.getUser().getUsername() + " - " + notification.getProfile()?.getName() + ' (' + notification.getSeniority()?.getName() + ')'}</span>)}
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default NotificationBarItem;