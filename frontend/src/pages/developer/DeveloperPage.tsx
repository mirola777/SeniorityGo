import { useEffect, useState } from 'react';
import LoadingScreen from '../../components/common/LoadingScreen';
import { Developer } from '../../models/Developer';
import { Admin } from '../../models/Admin';
import { getUserSession } from '../../services/AuthService';
import UserCard from '../../components/common/UserCard';
import DeveloperRequirement from '../../components/common/DeveloperRequirementsCard';
import UserPokemonsCard from '../../components/common/UserPokemons';


function DeveloperPage() {
    const [user, setUser] = useState<Developer | Admin | null>(null);

    useEffect(() => {
        getUserSession().then((user) => {
            setUser(user);
        });

    }, []);

    return (
        user === null ? <LoadingScreen /> :
        <div className='mx-auto max-w-screen-2xl w-full overflow-y-auto scrollbar-none'>
            <h2 className="text-5xl sm:text-8xl text-center p-8 font-extrabold text-white">{user?.getUser().getUsername()}</h2>

            <div className='flex flex-wrap'>
                <div className='flex flex-col w-full sm:w-1/3 sm:flex-wrap'>
                    <UserCard user={user} />
                    {user instanceof Developer && (<UserPokemonsCard user={user} />)}
                </div>

                {user instanceof Developer && (<DeveloperRequirement user={user} />)}

            </div>

        </div>
    );
}

export default DeveloperPage;