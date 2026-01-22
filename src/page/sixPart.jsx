import { ChevronLeft, ChevronRight } from "lucide-react";
import { gymGallery } from "../photos/gymGallery";
import { useState } from "react";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function SixPart() {

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
        <>
            <div className="w-full h-[580px] flex flex-col ">
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
            </div>
            <div className="w-full h-[580px] flex flex-col ">
                <div className="w-full h-[35px] bg-red-600 flex items-center justify-center mt-10">
                    <div className="w-[50%] h-full bg-black flex items-center justify-center">
                        <h1 className="text-5xl text-white font-bold tracking-[12px]">CONTACT US </h1>
                    </div>
                </div>
                <div className="w-full h-[450px] flex flex-row items-center justify-center">
                    <div className="w-[50%] h-full flex flex-col  mt-32">
                        <div className="w-[95%] mx-auto h-full flex flex-col ">
                            <span className="text-white text-m ">Send us a message and we'll get back to you as soon as possible!</span>
                            <input type="text" placeholder="NAME" className="w-[90%] h-10 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl " />
                            <input type="email" placeholder="EMAIL" className="w-[90%] h-10 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl " />
                            <textarea placeholder="MESSAGE" className="w-[90%] h-48 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl"></textarea>
                            <div className="w-[90%] h-10 flex items-center justify-end mt-5 ">
                                <button className="w-[150px] h-10 text-red-600 bg-white font-bold mt-5 rounded-2xl border-2 border-red-600 duration-300 ">SEND</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex flex-col  mt-32">
                        <div className="w-[95%] mx-auto h-full flex flex-col ">
                            <div className="w-full  h-[350px] flex bg-white ">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.7004425196956!2d79.96278419553607!3d7.064409662846104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f95d5653c0b5%3A0x9eb64f27a92db3c0!2sA%2B%20FITNESS%20CENTER!5e0!3m2!1sen!2slk!4v1769106785279!5m2!1sen!2slk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Fitness Center Location"
                                ></iframe>
                                

                            </div>
                            <div className="w-full h-[100px] flex flex-col mt-7">
                                <div className="flex flex-row items-center gap-3">
                                    <IoLocationSharp size={20} className="text-red-600" />
                                    <span className="text-white text-m font-bold ">369/1/1, Ganemulla road, Kadawatha .</span>
                                </div>
                                <div className="flex flex-row items-center gap-20 mt-3">
                                    <div className="flex flex-row items-center gap-3">
                                        <FaPhoneAlt size={20} className="text-red-600" />
                                        <span className="text-white text-m font-bold ">94 87777788888</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-3">
                                        <MdEmail size={20} className="text-red-600" />
                                        <span className="text-white text-m font-bold ">info@fitnesscenter.lk</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}