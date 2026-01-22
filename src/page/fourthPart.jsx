import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FourthPart() {
    return (
        <div className="h-[850px] w-full bg-black">
            <div className="w-full h-[35px] bg-red-600 flex items-center justify-center">
                <div className="w-[50%] h-full bg-black flex items-center justify-center">
                    <h1 className="text-5xl text-white font-bold tracking-[12px]">MEET OUR TRAINERS</h1>
                </div>
            </div>
            <div className="w-full h-[90px] flex items-center justify-center ">
                <span className="text-white text-lg tracking-[6px]">Expert Guidance, Real Results</span>
            </div>
            <div className="w-full h-[550px] mt-10">
                <div className="w-[90%] h-full mx-auto flex items-center justify-center ">
                    <div className="grid grid-cols-3   items-center justify-center gap-20 ">
                        <div className="h-[550px] w-[300px] bg-red-600 rounded-xl flex flex-col items-center justify-center">
                            <img src="/public/girl.png" className="h-[68%] w-full object-cover mt-4"></img>
                            <div className="h-[150px] w-full flex flex-col items-center justify-center gap-2">
                                <span className="text-white text-xl font-bold ">Ayeshi Jayasinhge</span>
                                <div className="h-[50px] w-[280px] flex  items-center justify-center">
                                    <p className="text-white text-m ">National Diploma in Sports Strength and Conditioning (SLF)</p>
                                </div>
                                <div className="h-[40px] w-full flex flex-row items-center justify-center gap-5">
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600 ">
                                        <FaWhatsapp size={20}/>
                                        </div>
                                    </Link>
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaFacebook size={20} />
                                        </div>
                                    </Link>
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaInstagram size={20}/>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="h-[550px] w-[300px] bg-red-600 rounded-xl flex flex-col items-center justify-center">
                            <img src="/public/boy1.png" className="h-[68%] w-full object-top mt-4"></img>
                            <div className="h-[150px] w-full flex flex-col items-center justify-center gap-2">
                                <span className="text-white text-xl font-bold ">Anjana Jayasinhge</span>
                                <div className="h-[50px] w-[280px] flex  items-center justify-center">
                                    <p className="text-white text-m ">National Diploma in Sports Strength and Conditioning (SLF)</p>
                                </div>
                                <div className="h-[40px] w-full flex flex-row items-center justify-center gap-5">
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600 ">
                                        <FaWhatsapp size={20}/>
                                        </div>
                                    </Link>
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaFacebook size={20} />
                                        </div>
                                    </Link>
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaInstagram size={20}/>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="h-[550px] w-[300px] bg-red-600 rounded-xl flex flex-col items-center justify-center">
                            <img src="/public/boy2.png" className="h-[68%] w-full object-top mt-4"></img>
                            <div className="h-[150px] w-full flex flex-col items-center justify-center gap-2">
                                <span className="text-white text-xl font-bold ">Sadewa Jayasinhge</span>
                                <div className="h-[50px] w-[280px] flex  items-center justify-center">
                                    <p className="text-white text-m ">National Diploma in Sports Strength and Conditioning (SLF)</p>
                                </div>
                                <div className="h-[40px] w-full flex flex-row items-center justify-center gap-5">
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600 ">
                                        <FaWhatsapp size={20}/>
                                        </div>
                                    </Link>
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaFacebook size={20} />
                                        </div>
                                    </Link>
                                    <Link className="group"> 
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaInstagram size={20}/>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                    

                </div>


            </div>


            <div className="w-full h-[90px] flex items-center justify-center mt-5">
                <p className="text-white text-lg tracking-[6px]">All our trainers are qualified instructors with a passion for fitness</p>
            </div>


        </div>
    );
}