import { ReactComponent as ErrorIcon } from '../../assests/icons/ExclamationTriangle.svg';
import { ReactComponent as SuccessIcon } from '../../assests/icons/CheckCircle.svg';


interface FormOutputMessageProps {
    success: string | null;
    errors: string[];
}


function FormOutputMessage({success, errors}: FormOutputMessageProps) {
    return (
        <div>
            {errors.length > 0 ? <div role="alert" className="rounded border-l-4 border-red-500 bg-gray-700 p-4">
                <ul className="list-inside text-gray-200">
                    {
                        errors.map((error) => {
                            return (
                                <li className="flex items-center">
                                    <ErrorIcon className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    {error}
                                </li>
                            );
                        })
                    }
                </ul>
            </div> : null}

            {success && (
                <div role="alert" className="rounded border-l-4 border-green-600 bg-gray-700 p-4">
                    <p className="flex items-center text-gray-200">
                        <SuccessIcon className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        {success}
                    </p>
                </div>
            )}
        </div>
    );
}

export default FormOutputMessage;