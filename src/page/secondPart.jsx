import { FaCheck } from "react-icons/fa";

export default function SecondPart() {
    return (
        <div className="w-full h-[490px] bg-[url(/public/secondPart.png)] flex flex-col bg-no-repeat  bg-right ">
            <div className="w-[700px] h-[100px]  flex ml-20 ">
                <h1 className="text-white text-7xl font-semibold tracking-[8px]">WHY CHOOSE US</h1>
            </div>

            <div className="flex ml-20 w-[500px] h-[130px]   mt-4">
                <p className=" text-white text-lg">We’re not just a gym -  we’re a community dedicated to your transformation. With expert trainers, state-of-the-art equipment, and a supportive atmosphere, you'll achieve results beyond your expectations.</p>

            </div>
            <div className=" ml-36 w-[500px] h-[100px] flex flex-col ">
                <div className="flex flex-row text-white gap-3 text-lg">
                    <FaCheck />
                    <span>Certified Expert Trainers</span>
                </div>
                <div className="flex flex-row text-white gap-3 text-lg">
                    <FaCheck />
                    <span>Modern Equipment</span>
                </div>
                <div className="flex flex-row text-white gap-3 text-lg">
                    <FaCheck />
                    <span>Flexible Schedule</span>
                </div>
                <div className="flex flex-row text-white gap-3 text-lg">
                    <FaCheck />
                    <span>Supportive Community</span>
                </div>
            </div>
            <div className=" ml-20  flex flex-col mt-12 w-[120px] h-[40px] " >
                <button className="border-2 border-red-600 py-2 text-white text-lg hover:bg-white hover:text-red-600">
                    Learn More
                </button>
            </div>
        </div>
    )
}