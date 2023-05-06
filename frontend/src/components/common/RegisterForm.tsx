import { useEffect, useState } from "react";
import { register } from "../../services/AuthService";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormOutputMessage from "./FormOutputMessage";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { formatDate } from "../../util/DateFormat";
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { Organization } from "../../models/Organization";
import { getAllOrganizations } from "../../services/OrganizationService";


function RegisterForm() {
    // Translation component
    const { t } = useTranslation();

    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [registerDict, setRegisterDict] = useState({
        user: {
            username: '',
            email: '',
            password: '',
        },
        confirm_password: '',
        first_name: '',
        last_name: '',
        second_name: '',
        avatar: '',
        birthday: formatDate(new Date()),
        phone_number: '',
        organization: 0,
        requirements: [],
        profiles: [],
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        register(registerDict).then((response) => {
            setSuccess(t('register_success'));
            setErrors([]);
        }).catch((error) => {
            setSuccess(null);
            setErrors([]);
            setErrors((prevErrors) => {
                const newErrors = error['errors'].map((error: string) => t(error));
                return [...prevErrors, ...newErrors];
            });
        });
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;
        if (type === 'text' || type === 'password' || type === 'email') {
            if (name.startsWith('user.')) {
                setRegisterDict({ ...registerDict, user: { ...registerDict.user, [name.split('.')[1]]: value } });
            } else {
                setRegisterDict({ ...registerDict, [name]: value });
            }
        }
    };

    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleDateChange = (newDate: DateValueType) => {
        setDate({
            startDate: newDate?.startDate ? new Date(newDate.startDate) : new Date(),
            endDate: newDate?.endDate ? new Date(newDate.endDate) : new Date(),
        });

        setRegisterDict({ ...registerDict, birthday: formatDate(date.startDate) });
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === 'organization') {
            setRegisterDict({ ...registerDict, [name]: +value });
        } else {
            setRegisterDict({ ...registerDict, [name]: value });
        }
    }

    useEffect(() => {
        getAllOrganizations().then((organizations) => {
            setOrganizations(organizations);

            if (organizations.length > 0) {
                setRegisterDict({ ...registerDict, organization: organizations[0].getId() });
            }
        })
    }, [setOrganizations]);


    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
            <div className="w-full rounded-lg border max-w-3xl xl:p-0 bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
            <div className="flex flex-col items-center space-y-4 p-8">
                    <Link to="/">
                        <AppLogo className="w-48"></AppLogo>
                    </Link>
                    <h2 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                        {t('register')}
                    </h2>
                    <form className="w-full space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium  text-white">{t('username')}*</label>
                            <input
                                id="user.username"
                                placeholder={t('username_placeholder') || ''}
                                name='user.username'
                                type='text'
                                value={registerDict.user.username}
                                required
                                onChange={handleInputChange}
                                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">{t('email')}*</label>
                            <input
                                id="user.email"
                                placeholder={t('email_placeholder') || ''}
                                name='user.email'
                                type='email'
                                value={registerDict.user.email}
                                required
                                onChange={handleInputChange}
                                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="organization" className="block mb-2 text-sm font-medium  text-white">{t('organization')}*</label>
                            <select
                                id="organization"
                                name='organization' 
                                value={registerDict.organization}
                                required
                                onChange={handleSelectChange}
                                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" >
                                    <option selected disabled >{t('select_organization')}</option>
                                    {organizations.map((organization) => (
                                        <option value={organization.getId()}>{organization.getName()}</option>
                                    ))}
                            </select>

                        </div>


                        <div className="flex space-x-4">
                            <div className="w-full">
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-white">{t('first_name')}*</label>
                                <input
                                    id="first_name"
                                    placeholder={t('first_name_placeholder') || ''}
                                    name='first_name'
                                    type='text'
                                    value={registerDict.first_name}
                                    required
                                    onChange={handleInputChange}
                                    className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>

                            <div className="w-full">
                                <label htmlFor="second_name" className="block mb-2 text-sm font-medium  text-white">{t('second_name')}</label>
                                <input
                                    id="second_name"
                                    placeholder={t('second_name_placeholder') || ''}
                                    name='second_name'
                                    type='text'
                                    value={registerDict.second_name}
                                    onChange={handleInputChange}
                                    className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="w-full">
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium  text-white">{t('last_name')}*</label>
                                    <input
                                        id="last_name"
                                        placeholder={t('last_name_placeholder') || ''}
                                        name='last_name'
                                        type='text'
                                        value={registerDict.last_name}
                                        required
                                        onChange={handleInputChange}
                                        className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div>
                                    <label htmlFor="phone_number" className="block mb-2 text-sm font-medium  text-white">{t('phone_number')}*</label>
                                    <input
                                        id="phone_number"
                                        placeholder={t('phone_number_placeholder') || ''}
                                        name='phone_number'
                                        type='text'
                                        value={registerDict.phone_number}
                                        required
                                        onChange={handleInputChange}
                                        className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="birthday" className="block mb-2 text-sm font-medium  text-white">{t('birthday')}*</label>
                            <Datepicker
                                primaryColor={"fuchsia"}
                                asSingle={true}
                                useRange={false}
                                value={date}
                                onChange={handleDateChange}
                            />
                        </div>

                        <div className="flex space-x-4">
                            <div className="w-full">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">{t('password')}*</label>
                                <input
                                    id="user.password"
                                    name='user.password'
                                    type="password"
                                    placeholder={t('password_placeholder') || ''}
                                    value={registerDict.user.password}
                                    required
                                    onChange={handleInputChange}
                                    className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>

                            <div className="w-full">
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium  text-white">{t('confirm_password')}*</label>
                                <input
                                    id="confirm_password"
                                    name='confirm_password'
                                    type="password"
                                    placeholder={t('password_placeholder') || ''}
                                    value={registerDict.confirm_password}
                                    required
                                    onChange={handleInputChange}
                                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        <button type="submit" className="w-full inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span className="block w-full rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                {t('register')}
                            </span>
                        </button>

                        <p className="text-sm font-light  text-gray-400">
                            {t('already_have_account')} <Link to="/login" className="font-medium text-primary-600 hover:underline text-primary-500">{t('login')}</Link>
                        </p>
                        <FormOutputMessage errors={errors} success={success} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
