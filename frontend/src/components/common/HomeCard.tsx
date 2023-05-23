interface HomeCardProps {
    text: string;
    image: string;
    index: number;
}

function HomeCard({ text, image, index }: HomeCardProps) {
    return (
        <div className="flex items-center">
            {index % 2 !== 0 ? (
                <div className="flex w-full lg:flex-row flex-col items-center">
                    <div className="flex items-center justify-end w-full mx-auto">
                        <div className="w-full lg:pr-8">
                            <div className="relative flex-1 mb-16 lg:mb-8 flex flex-col items-center justify-center h-full transition ease-in-out duration-150 rounded-2xl p-0.5 ">
                                <div className="h-full flex w-full flex-col text-center space-y-8  transition items-center rounded-xl  p-4">
                                    <div className="flex flex-col items-center p-6 space-y-4">
                                        <p className="text-xl lg:text-5xl text-gray-400">{"Step " + index}</p>
                                        <p className="text-lg lg:text-4xl text-white">{text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex order-1 lg:order-none items-center justify-start w-full mx-auto">
                        <div className="w-full lg:pl-8">
                            <div className="relative flex-1 mb-16  lg:mb-8 flex flex-col items-center justify-center h-full transition ease-in-out duration-150 rounded-2xl bg-gradient-to-r p-0.5 shadow-2xl hover:bg-indigo-500 from-fuchsia-700 to-blue-600">
                                <div className="flex flex-col items-center space-y-4">
                                    <img className="rounded-xl w-full" src={image} alt="Step" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex w-full lg:flex-row flex-col items-center">
                    <div className="flex order-1 lg:order-none items-center justify-start w-full mx-auto">
                        <div className="w-full lg:pr-8">
                            <div className="relative flex-1 mb-16 lg:mb-8 flex flex-col items-center justify-center h-full transition ease-in-out duration-150 rounded-2xl bg-gradient-to-r p-0.5 shadow-2xl hover:bg-indigo-500 from-fuchsia-700 to-blue-600">
                                <div className="flex flex-col items-center space-y-4">
                                    <img className="rounded-xl w-full" src={image} alt="Step" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start w-full mx-auto">
                        <div className="w-full lg:pl-8">
                            <div className="relative flex-1 mb-16  lg:mb-8 flex flex-col items-center justify-center h-full transition ease-in-out duration-150 rounded-2xl p-0.5">
                                <div className="h-full flex w-full flex-col text-center space-y-8  transition items-center rounded-xl p-4">
                                    <div className="flex flex-col items-center p-6 space-y-4">
                                        <p className="text-xl lg:text-5xl text-gray-400">{"Step " + index}</p>
                                        <p className="text-lg lg:text-4xl text-white">{text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div
                className="absolute  hidden lg:flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-dark-blue-300 border-4 border-blue-700 rounded-full left-1/2 sm:translate-y-0">
            </div>
        </div>
    );
}

export default HomeCard;