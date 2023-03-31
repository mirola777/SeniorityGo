import { Seniority } from '../../models/Seniority';

interface SeniorityCardProps {
    seniority: Seniority;
}

function SeniorityCard({ seniority }: SeniorityCardProps) {
    return (
        <div className="transition ease-in-out hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
            <a className="transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8" href="#">
                <div className="my-24 text-center">
                    <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                        {seniority.getName()}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        {seniority.getLevel()}
                    </p>
                </div>
            </a>
        </div>
    );
}

export default SeniorityCard;