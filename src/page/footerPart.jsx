import { ChevronLeft, ChevronRight } from "lucide-react";
import { gymGallery } from "../photos/gymGallery";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail, MdHomeFilled } from "react-icons/md";


export default function FooterPart() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(gymGallery.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const visibleProducts = gymGallery.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );
    return (
        <div className="w-full h-[880px] flex flex-col ">
            <div className="w-full h-[35px] bg-red-600 flex items-center justify-center">
                <div className="w-[50%] h-full bg-black flex items-center justify-center">
                    <h1 className="text-5xl text-white font-bold tracking-[12px]">IMAGE GALLERY</h1>
                </div>
            </div>

            <div className="w-full h-[450px] flex items-center justify-center mt-12 ">
                <div className="w-full h-[400px] flex flex-row  " >
                    <div className="w-[7%] h-full flex items-center justify-center mx-auto ">
                        <button
                            onClick={prevSlide}
                            className="text-3xl font-bold text-red-600 duration-300 rounded-full border-2 border-red-600 hover:border-black"
                            aria-label="Previous">
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="w-[85%] h-full flex  mx-auto  gap-5 ">
                        <div className="grid grid-cols-3 gap-3 ">
                            {visibleProducts.map((gymGallery) => (
                                <div key={gymGallery.id} className="w-full h-full flex flex-col  cursor-pointer group" >
                                    <div className="w-full h-[90%] my-auto flex  overflow-hidden group-hover:scale-105 duration-300 ">
                                        <img
                                            src={gymGallery.image}
                                            className="w-full h-full object-cover ">
                                        </img>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[7%] h-full flex items-center justify-center mx-auto ">
                        <button
                            onClick={nextSlide}
                            className="text-3xl font-bold text-red-600 duration-300 rounded-full border-2 border-red-600 hover:border-black"
                            aria-label="Next">
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>

            </div>
            <div className="w-full h-[50px] flex items-center justify-center gap-3 ">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-red-600" : "bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className="w-full h-[300px] bg-red-600 flex items-center justify-center mt-12">
                <div className="w-[80%] h-[280px] ">
                    <div className="grid grid-cols-4 w-full h-full">
                        <div className="flex flex-col items-center justify-start w-full h-full border-r-4 border-white">
                            <div className="flex flex-col items-center justify-center w-full h-[30%] ">
                                <span className="text-black text-4xl font-bold ">FITNESS</span>
                                <span className="text-black text-2xl font-bold leading-none">CENTER</span>
                            </div>

                            <div className="flex w-full h-[40%] items-center justify-center ">
                                <span className="text-white text-lg ">Transform your life one workout at a time . </span>
                            </div>

                            <div className="h-[40px] w-full flex flex-row items-center justify-center gap-5">
                                <Link className="group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600 ">
                                        <FaWhatsapp size={20} />
                                    </div>
                                </Link>
                                <Link className="group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaFacebook size={20} />
                                    </div>
                                </Link>
                                <Link className="group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-white group-hover:text-red-600">
                                        <FaInstagram size={20} />
                                    </div>
                                </Link>
                            </div>

                        </div>
                        <div className="flex flex-col items-center justify-start w-full h-full border-r-4 border-white">
                            <div className="flex flex-col items-center justify-center w-full h-[30%] ">
                                <span className="text-black text-2xl font-bold ">OPENING HOURS</span>
                            </div>
                            <div className="flex w-[90%]  mx-auto h-[35%] items-center justify-center flex-col ">
                                <span className="text-white text-xl ">Monday - Friday</span>
                                <span className="text-white text-xl ">(5am - 11pm)</span>
                            </div>

                            <div className="flex w-[90%]  mx-auto h-[35%] items-center justify-center flex-col ">
                                <span className="text-white text-xl ">Saturday - Sunday</span>
                                <span className="text-white text-xl ">(8am - 9pm)</span>
                            </div>

                        </div>
                        <div className="flex flex-col items-center justify-start w-full h-full border-r-4 border-white">
                            <div className="flex flex-col items-center justify-center w-full h-[30%] ">
                                <span className="text-black text-2xl font-bold ">CLASSES</span>
                            </div>
                            <div className="flex w-[90%]  mx-auto h-[70%] items-center justify-start flex-col  gap-2">
                                <span className="text-white text-xl ">Yoga</span>
                                <span className="text-white text-xl ">High-Intensity Interval</span>
                                <span className="text-white text-xl ">Strength</span>
                                <span className="text-white text-xl ">Cardio</span>


                            </div>



                        </div>
                        <div className="flex flex-col items-center justify-start w-full h-full ">
                            <div className="flex flex-col items-center justify-center w-full h-[30%] ">
                                <span className="text-black text-2xl font-bold ">CONTACT</span>
                            </div>
                            <div className="flex w-[90%]  mx-auto h-[70%] items-center justify-start flex-col gap-4">
                                <div className="flex  items-center ju w-full h-auto flex-row gap-4">
                                    <MdHomeFilled size={30} />
                                    <span className="text-white text-xl ">123 Main Street City,Colombo.</span>
                                </div>
                                <div className="flex  items-center w-full h-auto flex-row gap-4">
                                    <FaPhoneAlt size={30} />
                                    <span className="text-white text-xl ">+94 77 775 576</span>
                                </div>
                                <div className="flex  items-center w-full h-auto flex-row gap-4">
                                    <MdEmail size={30} />
                                    <span className="text-white text-xl ">info@email.com</span>
                                </div>
                            </div>



                        </div>

                    </div>

                </div>

            </div>
            <div className="w-full h-[30px] bg-white items-center justify-center">
                <div className="w-[95%] h-full flex items-center justify-between">
                    <div className="w-[40%] h-full flex items-center justify-center">
                        <span className="text-black font-light">© 2026 Fitness Center. All rights reserved.</span>
                    </div>
                    <div className="w-[20%] h-full flex items-center justify-end ">
                        <button className="text-black border-r-2 border-l-2 border-black px-4">Privacy</button>
                        <button className="text-black border-r-2  border-black px-4">Terms</button>
                    </div>

                </div>


            </div>

        </div>
    )
}