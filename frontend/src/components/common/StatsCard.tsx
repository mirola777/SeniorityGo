interface StatsCardProps {
    number: number;
    label: string;
}

function StatsCard({ number, label }: StatsCardProps) {
    return (
        <div className="w-full transition ease-in-out hover:scale-105">
            <div className=" block">
                <div className="flex flex-col text-center">
                    <div className="rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
                        <div className="transition block rounded-xl duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8">
                            <figure className="mx-auto text-center">
                                <p className="text-7xl font-medium text-gray-900 dark:text-white">{number}</p>
                                <p className="text-md text-center font-medium text-gray-900 dark:text-white">{label}</p>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsCard;