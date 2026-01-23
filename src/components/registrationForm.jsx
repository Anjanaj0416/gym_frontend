import { FaCalendarAlt } from "react-icons/fa";

export default function RegistrationForm({ onClose }) {

    const handleCheckboxChange = (goal) => {
        setFormData(prev => ({
            ...prev,
            fitnessGoals: prev.fitnessGoals.includes(goal)
                ? prev.fitnessGoals.filter(g => g !== goal)
                : [...prev.fitnessGoals, goal]
        }));
    };

    return (
        <div className='w-[70%] mx-auto  h-[680px] flex flex-col items-center justify-start bg-black pt-4 inset-0 z-50  backdrop-blur-sm fixed '>
            <div className="w-full h-[90vh] flex flex-col items-center justify-start bg-black overflow-y-auto  ">
                <div className="w-full h-[20px] bg-red-600 flex items-center justify-center">
                    <div className="w-[50%] h-full bg-black flex items-center justify-center">
                        <h1 className="text-3xl text-white font-bold tracking-[12px]">JOIN WITH US</h1>
                    </div>
                </div>
                <div className="w-full h-[10px]  flex items-center justify-center mt-8 flex-row">
                    <div className="w-[40%] h-full  flex items-center justify-start">
                        <button
                            onClick={onClose}
                            className="flex items-center gap-2 text-white hover:text-red-600 transition-colors ml-12"
                        >
                            <span className="text-2xl">←</span>
                            <span className="text-lg">Back</span>
                        </button>
                    </div>
                    <div className="w-[60%] h-full  flex items-center justify-start"><span className="text-white text-lg font-semibold tracking-[2px]">REGISTRATION FORM</span></div>
                </div>
                <div className="w-[90%] mx-auto h-[680px] flex flex-col items-center justify-start border-2 border-red-600 mt-2 ">
                    <div className="w-[95%] mx-auto h-[98%] my-auto flex flex-col items-center justify-start  ">
                        <div className="w-full h-[250px] border-b-2 border-white flex flex-col gap-1">
                            <div className="w-full h-[20px]  flex  mt-4"><span className="text-white text-lg font-ithin">Personal Information</span></div>
                            <div className=" w-full flex flex-row h-auto justify-between ">
                                <input type="text" placeholder="FIRST NAME" className="w-[48%] h-10 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl " />
                                <input type="text" placeholder="LAST NAME" className="w-[48%] h-10 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl " />
                            </div>
                            <input type="text" placeholder="ADDRESS" className="w-full h-10 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl " />
                            <div className=" w-full flex flex-row h-auto justify-between ">
                                <input type="email" placeholder="EMAIL" className="w-[48%] h-10 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl " />
                                <input type="text" placeholder="PHONE NUMBER" className="w-[48%] h-10 mt-5 text-black bg-white placeholder:text-red-600 px-4 outline-none rounded-2xl " />
                            </div>

                        </div>
                        <div className="w-full h-[180px] border-b-2 border-white flex flex-col gap-1">
                            <div className="w-full h-[20px]  flex  mt-4"><span className="text-white text-lg font-ithin">Fitness Information</span></div>
                            <div className="mt-2 flex flex-row items-center justify-start">
                                <p className="text-white mb-3 h-auto">Current Fitness Level :</p>
                                <div className="flex gap-8 ml-6">
                                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                        <label key={level} className="flex items-center gap-2 cursor-pointer ">
                                            <input
                                                type="radio"
                                                name="fitnessLevel"
                                                value={level}
                                                className="w-5 h-5 accent-red-600"
                                            />
                                            <span className="text-white">{level}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-2">
                                <p className="text-white mb-3">Fitness Goals: (Select all that apply)</p>
                                <div className="grid grid-cols-5 gap-3">
                                    {['Weight Loss', 'Muscle Gain', 'General Fitness', 'Athletic Performance', 'Flexibility'].map((goal) => (
                                        <label key={goal} className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="fitnessGoals"
                                                onChange={() => handleCheckboxChange(goal)}
                                                className="w-5 h-5 accent-red-600"
                                            />
                                            <span className="text-white">{goal}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[100px]  flex flex-col gap-1">
                            <div className="w-full h-[20px] mt-3">
                                {['i agree to the Trems & Conditions and Privacy Policy'].map((goal) => (
                                    <label key={goal} className="flex items-center gap-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="fitnessGoals"
                                            onChange={() => handleCheckboxChange(goal)}
                                            className="w-5 h-5 accent-red-600"
                                        />
                                        <span className="text-white">{goal}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex items-center w-full h-[40px]  flex-row justify-between mt-6">
                                <div className="flex items-center gap-4 w-[50%] h-full  flex-row ">
                                    <label className="text-white">Preferred Start Date :</label>
                                    <input
                                        type="date"
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="h-10 px-4 bg-white text-red-600 outline-none rounded-2xl "
                                    />
                                    <FaCalendarAlt size={20} className="text-red-600" />
                                </div>
                                <button className="text-red-600 bg-white text-xl px-16 py-1 hover:text-white font-semibold h-full hover:bg-red-600 border-2 border-red-600 rounded-full">
                                    JOIN US
                                </button>
                            </div>




                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}