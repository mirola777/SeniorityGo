import { useTranslation } from 'react-i18next';
import { NotificationBase } from '../../models/Notification';
import { NotificationRequirementValidated } from '../../models/NotificationRequirementValidated';
import { NotificationJoinProfile } from '../../models/NotificationJoinProfile';
import { NotificationAdvanceProfile } from '../../models/NotificationAdvanceProfile';
import { NotificationAdminAdvanceProfile } from '../../models/NotificationAdminAdvanceProfile';
import { NotificationNewPokemon } from '../../models/NotificationNewPokemon';
import { formatDateTimeNotification } from '../../util/DateFormat';


interface UserNotificationDropdownItemProps {
    notification: NotificationBase;
}


function UserNotificationDropdownItem({ notification }: UserNotificationDropdownItemProps) {
    const { t } = useTranslation();

    return (
        <div>
            <div key={notification.getId() + notification.getMessage()} className={"w-full py-2 text-gray-300"}>
                <div className="flex w-full items-start">
                    <div className="relative inline-block shrink-0">
                        {notification instanceof NotificationRequirementValidated && (<img className="w-10 h-10 mr-2" src={notification.getRequirement()?.getImage()} alt="Requirement" />)}
                        {notification instanceof NotificationAdminAdvanceProfile && (<img className="w-10 h-10 mr-2 rounded-full" src={notification.getDeveloper()?.getAvatar()} alt="Avatar" />)}
                        {notification instanceof NotificationNewPokemon && (<img className="w-10 h-10 mr-2 rounded-full" src={notification.getPokemon()?.getSmallImage()} alt="Avatar" />)}
                    </div>
                    <div className="text-sm font-normal">
                        <div className="text-sm font-semibold text-white">{t(notification.getMessage())}</div>
                        {notification instanceof NotificationRequirementValidated && (<span className="text-sm font-medium text-blue-500">{notification.getRequirement()?.getName()}</span>)}
                        {notification instanceof NotificationJoinProfile && (<span className="text-sm font-medium text-blue-500">{notification.getProfile()?.getName()}</span>)}
                        {notification instanceof NotificationAdvanceProfile && (<span className="text-sm font-medium text-blue-500">{notification.getProfile()?.getName() + ' (' + notification.getSeniority()?.getName() + ')'}</span>)}
                        {notification instanceof NotificationAdminAdvanceProfile && (<span className="text-sm font-medium text-blue-500">{notification.getDeveloper()?.getUser().getUsername() + " - " + notification.getProfile()?.getName() + ' (' + notification.getSeniority()?.getName() + ')'}</span>)}
                    </div>
                    <div className="ml-auto w-1/3">
                        <div className="text-xs font-normal text-right text-gray-400">{formatDateTimeNotification(notification.getCreatedAt(), t)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserNotificationDropdownItem;