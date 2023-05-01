import { useState } from "react";
import { login } from "../../services/AuthService";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormOutputMessage from "./FormOutputMessage";
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"


function LoginForm() {
    // Translation component
    const { t } = useTranslation();

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [credentialsDict, setCredentialsDict] = useState({
        username: '',
        password: '',
    });


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login(credentialsDict).then((response) => {
            setSuccess(t('login_success'));
            setErrors([]);
        })
            .catch((error) => {
                setSuccess(null);
                const errorObj = JSON.parse(error.message);
                setErrors([]);
                setErrors((prevErrors) => {
                    const newErrors = errorObj['errors'].map((error: string) => t(error));
                    return [...prevErrors, ...newErrors];
                });
            });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;

        if (type === 'text' || type === 'password')
            setCredentialsDict({ ...credentialsDict, [name]: value });
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
            <div className="w-full rounded-lg border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
                <div className="flex flex-col items-center p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Link to="/">
                        <AppLogo className="w-48"></AppLogo>
                    </Link>
                    <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                        {t('login')}
                    </h1>

                    <form className="w-full space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium  text-white">{t('username')}</label>
                            <input
                                placeholder={t('username_placeholder') || ''}
                                name='username'
                                type='text'
                                value={credentialsDict.username}
                                required
                                onChange={handleInputChange}
                                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">{t('password')}</label>
                            <input
                                name='password'
                                type="password"
                                placeholder={t('password_placeholder') || ''}
                                value={credentialsDict.password}
                                required
                                onChange={handleInputChange}
                                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="flex items-center justify-between">

                        </div>
                        <button type="submit" className="w-full inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span className="block w-full rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                {t('login')}
                            </span>
                        </button>

                        <p className="text-sm font-light  text-gray-400">
                            {t('dont_have_account')} <Link to="/register" className="font-medium text-primary-600 hover:underline text-primary-500">{t('register')}</Link>
                        </p>

                        <FormOutputMessage errors={errors} success={success} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
