function DeveloperAbout() {
    return (
        <div className="overflow-y-auto scrollbar-none p-8 mx-auto w-full h-full">
            <div className="flex flex-col h-full space-y-8">

                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>

                    <h1 className="mb-4 text-4xl  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">About <span className="underline underline-offset-3 decoration-8  decoration-blue-600">About</span></h1>
                    <p className="text-lg font-normal  lg:text-xl text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className='rounded-lg  p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>

                    <h1 className="mb-4 text-4xl  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">We invest in the <span className="underline underline-offset-3 decoration-8  decoration-blue-600">world’s potential</span></h1>
                    <p className="text-lg font-normal lg:text-xl text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
            </div>
        </div>


    );
}

export default DeveloperAbout;