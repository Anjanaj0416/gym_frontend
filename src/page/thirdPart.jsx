export default function ThirdPart() {
    return (
        <div className="w-full h-[1400px] bg-black">
            <div className="w-full h-[35px] bg-red-600 flex items-center justify-center">
                <div className="w-[50%] h-full bg-black flex items-center justify-center">
                    <h1 className="text-5xl text-white font-bold tracking-[12px]">OUR CLASSES</h1>
                </div>
            </div>
            <div className="w-[75%] h-[1200px] mx-auto mt-20 flex gap-7 flex-col ">
                <div className="w-full h-[270px] border-2 border-red-600 flex flex-row px-2 py-3">
                    <img src="/public/yoga.png" className="w-[50%] h-full object-center"></img>
                    <div className="w-[50%] h-full flex flex-col items-center justify-center ">
                        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center mx-auto gap-6">
                            <div className="flex flex-row gap-3 w-full h-[120px] items-center justify-center  ">
                                <h1 className="text-6xl text-white">Yoga</h1>
                                <span className="text-red-600 mt-9">(45 minutes)</span>
                            </div>
                            <p className="text-white items-center justify-center flex">
                                Balance, flexibility, and mindfulness combine in our signature yoga classes. Perfect for all levels, you'll improve strength and reduce stress through guided poses and breathwork.
                            </p>

                            <button className="text-lg text-red-600 border-2 border-red-600 px-8 py-1 tracking-[10px] hover:bg-red-600 hover:text-black">View More</button>

                        </div>


                    </div>
                </div>

                <div className="w-full h-[270px] border-2 border-red-600 flex flex-row px-2 py-3">

                    <div className="w-[50%] h-full flex flex-col items-center justify-center ">
                        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center mx-auto gap-6">
                            <div className="flex flex-row gap-3 w-full h-[100px] items-center justify-center ">
                                <h1 className="text-6xl text-white">Strenght</h1>
                                <span className="text-red-600 mt-9">(60 minutes)</span>
                            </div>
                            <p className="text-white items-center justify-center flex">
                                Build lean muscle and boost metabolism with progressive resistance training. Expert guidance ensures proper form and maximum results for all fitness levels.
                            </p>

                            <button className="text-lg text-red-600 border-2 border-red-600 px-8 py-1 tracking-[10px] hover:bg-red-600 hover:text-black">View More</button>

                        </div>


                    </div>

                    <img src="/public/Strength.png" className="w-[50%] h-full object-center"></img>
                </div>

                <div className="w-full h-[270px] border-2 border-red-600 flex flex-row px-2 py-3">
                    <img src="/public/Cardio.png" className="w-[50%] h-full object-center"></img>
                    <div className="w-[50%] h-full flex flex-col items-center justify-center ">
                        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center mx-auto gap-6 my-auto">
                            <div className="flex flex-row gap-3 w-full h-[100px] items-center justify-center ">
                                <h1 className="text-6xl text-white">Cardio</h1>
                                <span className="text-red-600 mt-9">(30 minutes)</span>
                            </div>
                            <p className="text-white items-center justify-center flex">
                                High-energy 30-minute sessions that torch calories and improve endurance. Fast, fun, and effective for busy schedules.
                            </p>

                            <button className="text-lg text-red-600 border-2 border-red-600 px-8 py-1 tracking-[10px] hover:bg-red-600 hover:text-black">View More</button>

                        </div>


                    </div>
                </div>

                <div className="w-full h-[270px] border-2 border-red-600 flex flex-row px-2 py-3">

                    <div className="w-[50%] h-full flex flex-col items-center justify-center ">
                        <div className="w-full h-[30%]  items-center justify-center  ">
                            <div className="flex flex-col  w-full h-[100px] items-center justify-center gap-2 ">
                                <h1 className="text-5xl text-white">High-Intensity Interval</h1>
                                <span className="text-red-600 ml-80">(45 minutes)</span>
                            </div>
                        </div>
                        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center mx-auto gap-6">
                            <p className="text-white items-center justify-center flex">
                                Maximum results in minimum time. Intense intervals of work and rest deliver incredible fat-burning and fitness gains.
                            </p>
                            <button className="text-lg text-red-600 border-2 border-red-600 px-8 py-1 tracking-[10px] hover:bg-red-600 hover:text-black">View More</button>
                        </div>
                    </div>

                    <img src="/public/High-Intensity Interval.png" className="w-[50%] h-full object-center"></img>
                </div>

            </div>

        </div>

    )
}