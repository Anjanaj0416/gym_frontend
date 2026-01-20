import { FaPeopleGroup } from "react-icons/fa6";
import Header from "../components/header";

export default function FristPart() {
    return (
        <>
            <div className="bg-[url(/public/homepage1.png)] w-full h-[670px] bg-cover  flex flex-col ">
                <Header />
                <div className=" w-[500px] h-[200px] mt-20 ml-28 flex flex-col  justify-center items-center leading-none">
                    <span className="text-[200px] text-white font-semibold tracking-[-8px]  ">SHAPE</span>
                    <span className="text-[65px] text-white font-thin  -mt-4">Your Body Today</span>
                </div>
                <div className=" ml-20 mt-20 flex group w-[200px] h-[60px] ">
                    <button className="w-[200px] h-[60px] flex flex-row justify-center items-center  border-2 border-red-600  group-hover:bg-red-50">
                        <span className="text-white text-2xl group-hover:text-red-600">Join Us Now</span>
                    </button>

                </div>

                <div className="w-[500px] h-[100px] ml-20 mt-9 flex ">
                    <p className="text-white">Getting in shape isn't hard when you're in a supportive environment. Lifetime Fitness is more than just a gym - it's a caring family that's there to help you achieve your goals</p>

                </div>

            </div>
            <div className="w-full h-[240px] bg-black flex justify-center items-center ">
                <div className=" flex flex-row justify-between items-center h-full w-[70%] mx-auto ">
                    <div className="flex group">
                        <button className="w-[210px] h-[210px] rounded-full bg-red-600 flex flex-col  justify-center items-center  group-hover:bg-white">

                            <img src="/public/group-users.png" className="w-24 h-24" />
                            <span className="text-white text-6xl group-hover:text-red-600 ">200+</span>
                            <span className="text-white text-xl group-hover:text-red-600">Members</span>

                        </button>

                    </div>
                    <div className="flex group">
                        <button className="w-[210px] h-[210px] rounded-full bg-red-600 flex flex-col  justify-center items-center  group-hover:bg-white">

                            <img src="/public/arm.png" className="w-24 h-24" />
                            <span className="text-white text-6xl group-hover:text-red-600 ">50+</span>
                            <span className="text-white text-xl group-hover:text-red-600">Classes</span>

                        </button>

                    </div>
                    <div className="flex group">
                        <button className="w-[210px] h-[210px] rounded-full bg-red-600 flex flex-col  justify-center items-center  group-hover:bg-white">

                            <img src="/public/workout.png" className="w-24 h-24" />
                            <span className="text-white text-6xl group-hover:text-red-600 ">100+</span>
                            <span className="text-white text-xl group-hover:text-red-600">Workouts</span>

                        </button>

                    </div>
                    <div className="flex group">
                        <button className="w-[210px] h-[210px] rounded-full bg-red-600 flex flex-col  justify-center items-center  group-hover:bg-white">

                            <img src="/public/5-stars.png" className="w-28 h-24" />
                            <span className="text-white text-6xl group-hover:text-red-600 ">15+</span>
                            <span className="text-white text-xl group-hover:text-red-600">Years</span>

                        </button>

                    </div>

                </div>

            </div>
        </>

    );
}