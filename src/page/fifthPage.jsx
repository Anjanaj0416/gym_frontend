import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


export default function FifthPage() {
    return (
        <div className="w-full h-[800px] flex flex-col ">
            <div className="w-full h-[35px] bg-red-600 flex items-center justify-center">
                <div className="w-[50%] h-full bg-black flex items-center justify-center">
                    <h1 className="text-5xl text-white font-bold tracking-[12px]">MEMBER PRICING</h1>
                </div>
            </div>
            <div className="w-full h-[600px] flex item-center justify-center mt-12">
                <div className="w-[90%] mx-auto flex items-center justify-center ">
                    <div className="grid grid-cols-3 items-center justify-center  gap-7">
                        <div className="h-[600px] w-[350px] border-2 border-red-600 flex flex-col  items-center justify-center">
                            <div className="h-[560px] w-[310px] border-2 border-red-600 flex flex-col  items-center justify-center">
                                <div className="h-[540px] w-[290px]  flex flex-col items-center justify-start" >
                                    <div className="w-[150px] h-[40px] bg-red-600 flex items-center justify-center rounded-2xl">
                                        <span className="text-2xl font-thin text-white">BASIC</span>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[40px] flex items-center justify-center border-b-2 border-white ">
                                        <span className="text-2xl font-thin text-white tracking-[8px]">MEMBERSHIP</span>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[150px] flex items-center justify-center flex-col border-b-2 border-white ">
                                        <div className="h-[50%] flex flex-col items-center justify-center w-full">
                                            <div className="flex flex-row w-full h-auto items-center justify-center gap-3">
                                                <span className="text-white text-lg">GENTS</span>
                                                <span className="text-red-600 text-2xl">-</span>
                                                <span className="text-red-600 text-4xl">RS. 4,000</span>
                                            </div>
                                            <span className="text-white text-m">(MONTHLY)</span>
                                        </div>
                                        <div className="h-[50%] flex flex-col items-center justify-center w-full">
                                            <div className="flex flex-row w-full h-auto items-center justify-center gap-3">
                                                <span className="text-white text-lg">LADIES</span>
                                                <span className="text-red-600 text-2xl">-</span>
                                                <span className="text-red-600 text-4xl">RS. 3,000</span>
                                            </div>
                                            <span className="text-white text-m">(MONTHLY)</span>
                                        </div>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[250px] flex  flex-col  mt-6 gap-1  px-3 ">
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Gym Access</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Cardio Equipment</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Locker Room Access</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Free WIFI</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <ImCross  size={15} className="text-red-600"/>
                                            <span className="text-white text-lg">Group Classes</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <ImCross  size={15} className="text-red-600"/>
                                            <span className="text-white text-lg">Guest Passes</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <ImCross  size={15} className="text-red-600"/>
                                            <span className="text-white text-lg">Personal Training</span>
                                        </div>
                                    </div>
                                    <button className="border-2 border-red-600 bg-white text-red-600 px-6 py-2 tracking-[4px] font-extrabold rounded-2xl hover:text-white hover:bg-red-600 ">Join Now

                                    </button>
                                    
                                    


                                </div>


                            </div>
                        </div>
                        <div className="h-[600px] w-[350px] border-2 border-red-600 flex flex-col  items-center justify-center">
                            <div className="h-[560px] w-[310px] border-2 border-red-600 flex flex-col  items-center justify-center">
                                <div className="h-[540px] w-[290px]  flex flex-col items-center justify-start" >
                                    <div className="w-[150px] h-[40px] bg-red-600 flex items-center justify-center rounded-2xl">
                                        <span className="text-2xl font-thin text-white">STANDARD</span>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[40px] flex items-center justify-center border-b-2 border-white ">
                                        <span className="text-2xl font-thin text-white tracking-[8px]">MEMBERSHIP</span>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[150px] flex items-center justify-center flex-col border-b-2 border-white ">
                                        <div className="h-[50%] flex flex-col items-center justify-center w-full">
                                            <div className="flex flex-row w-full h-auto items-center justify-center gap-3">
                                                <span className="text-white text-lg">GENTS</span>
                                                <span className="text-red-600 text-2xl">-</span>
                                                <span className="text-red-600 text-4xl">RS. 5,000</span>
                                            </div>
                                            <span className="text-white text-m">(MONTHLY)</span>
                                        </div>
                                        <div className="h-[50%] flex flex-col items-center justify-center w-full">
                                            <div className="flex flex-row w-full h-auto items-center justify-center gap-3">
                                                <span className="text-white text-lg">LADIES</span>
                                                <span className="text-red-600 text-2xl">-</span>
                                                <span className="text-red-600 text-4xl">RS. 4,000</span>
                                            </div>
                                            <span className="text-white text-m">(MONTHLY)</span>
                                        </div>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[250px] flex  flex-col  mt-6 gap-1  px-3 ">
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Everything in Basic</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Unlimited Group Classes</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">2 Guest Passes / Month</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Towel Service</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <ImCross  size={15} className="text-red-600"/>
                                            <span className="text-white text-lg">Nutrition Consultation</span>
                                        </div>
                                        
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <ImCross  size={15} className="text-red-600"/>
                                            <span className="text-white text-lg">Personal Training</span>
                                        </div>
                                    </div>
                                    <button className="border-2 border-red-600 bg-white text-red-600 px-6 py-2 tracking-[4px] font-extrabold rounded-2xl hover:text-white hover:bg-red-600 ">Join Now

                                    </button>
                                    
                                    


                                </div>


                            </div>
                        </div>

                        <div className="h-[600px] w-[350px] border-2 border-red-600 flex flex-col  items-center justify-center">
                            <div className="h-[560px] w-[310px] border-2 border-red-600 flex flex-col  items-center justify-center">
                                <div className="h-[540px] w-[290px]  flex flex-col items-center justify-start" >
                                    <div className="w-[150px] h-[40px] bg-red-600 flex items-center justify-center rounded-2xl">
                                        <span className="text-2xl font-thin text-white">PREMIUM</span>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[40px] flex items-center justify-center border-b-2 border-white ">
                                        <span className="text-2xl font-thin text-white tracking-[8px]">MEMBERSHIP</span>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[150px] flex items-center justify-center flex-col border-b-2 border-white ">
                                        <div className="h-[50%] flex flex-col items-center justify-center w-full">
                                            <div className="flex flex-row w-full h-auto items-center justify-center gap-3">
                                                <span className="text-white text-lg">GENTS</span>
                                                <span className="text-red-600 text-2xl">-</span>
                                                <span className="text-red-600 text-4xl">RS. 6,000</span>
                                            </div>
                                            <span className="text-white text-m">(MONTHLY)</span>
                                        </div>
                                        <div className="h-[50%] flex flex-col items-center justify-center w-full">
                                            <div className="flex flex-row w-full h-auto items-center justify-center gap-3">
                                                <span className="text-white text-lg">LADIES</span>
                                                <span className="text-red-600 text-2xl">-</span>
                                                <span className="text-red-600 text-4xl">RS. 5,000</span>
                                            </div>
                                            <span className="text-white text-m">(MONTHLY)</span>
                                        </div>
                                    </div>
                                    <div className="w-[90%] mx-auto h-[250px] flex  flex-col  mt-6 gap-1  px-3 ">
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Everything in Standard</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">4 Personal Training Sessions</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Nutrition Consultation</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Priority Booking</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">5 Guest Passes / Month</span>
                                        </div>
                                        <div className="w-full h-auto flex flex-row gap-3 items-center ">
                                            <FaCheck size={15} className="text-green-500"/>
                                            <span className="text-white text-lg">Massage Discounts</span>
                                        </div>
                                        
                                    </div>
                                    <button className="border-2 border-red-600 bg-white text-red-600 px-6 py-2 tracking-[4px] font-extrabold rounded-2xl hover:text-white hover:bg-red-600 ">Join Now

                                    </button>
                                    
                                    


                                </div>


                            </div>
                        </div> 



                    </div>

                </div>

            </div>

            <div className="w-full h-[70px] flex items-center justify-center text-white text-2xl"><span>Day Pass: Rs. 500</span></div>


        </div>
    )
}